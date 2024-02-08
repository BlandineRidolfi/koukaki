<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles_and_scripts' );

function theme_enqueue_styles_and_scripts() {
    // Chargement du fichier CSS swiper avec le CDN
    wp_enqueue_style('swiper-style', "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" , array());

    // Chargement du fichier JS de swiper avec le CDN
    wp_enqueue_script('swiper', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', array('jquery'), false, true);

    // Chargement du style thème parent
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

    // Chargement du style personnalisé du thème enfant
    wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/assets/css/style.css', array(), time());
    
    // Chargement du script du thème enfant avec jQuery    
    wp_enqueue_script('script', get_theme_file_uri() . '/js/script.js', array('jquery', 'swiper'),time(), true);
    
}

// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}