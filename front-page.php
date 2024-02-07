<?php

get_header();
?>

    <main id="primary" class="site-main">
        <!--Ajout de la video et de la banner background -->
        <section class="banner">
            <div class="banner__container banner__container--video">
                <video id="background-video" autoplay loop muted>
                    <source src="<?php echo get_theme_file_uri() .'/assets/video/video_hero_koukaki.mp4'; ?>" 
                        type="video/mp4">
                </video>
            </div>          
            <img class="banner__logo" src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?>" 
                alt="logo Fleurs d'oranger & chats errants">
        </section>

        <section id="story" class="story">
            <h2>
                <span class="title">L'</span>
                <span class="title">histoire</span>
            </h2>
            <article class="story__article">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>
            
            <!-- Section Characters déplacée dans template-parts\characters-slider.php -->
            <?php get_template_part('template-parts/characters') ;?>
            
            <!-- Section lieu -->
            <article id="place" class="story__place">
                <div>
                    <h3>
                        <span class="title">Le</span>
                        <span class="title">Lieu</span>
                    </h3>
                    <p><?php echo get_theme_mod('place'); ?></p>
                </div>

            </article>
        </section>


        <section id="studio" class="studio">
            <h2>
                <span class="title">Studio</span>
                <span class="title">Koukaki</span> 
            </h2>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
            </section>

            <!-- ajout de la section nomination templates-parts -->
        <?php get_template_part('template-parts/content', 'nomination'); ?>
            
    </main><!-- #main -->

    

<?php
get_footer();
