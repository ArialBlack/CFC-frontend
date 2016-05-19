<?php
/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 
 ENGLISH
 
 */
global $language;
$lang = $language->language;

if ($lang == 'uk') {
    $lang = 'ua';
}
?>

<div id="page">

    <div id="main" class="main">
        <section class="top-story-section" id="top_story" data-scroll-index="0">
            <div class="logo">
            </div>


           <?php
            $block = module_invoke('views', 'block_view', 'news-block_2');
            print render($block['content']);
            ?>
            
            <a href="#" class="phone"><span class="phone-number">+380 (44) 492-75-99</span></a>
        </section>

        <section class="team-section" id="team" data-scroll-index="1">
            <?php
            $block = module_invoke('views', 'block_view', 'team-block');
            print render($block['content']);
            ?>
        </section>

        <section class="services-section" id="services" data-scroll-index="2">

            <?php
            $block = module_invoke('views', 'block_view', 'news-block_2');
            print render($block['content']);
            ?>


            <div class="modal fade" role="dialog" id="philantropy">
                <div class="modal-dialog">

                    <div class="modal-content">

                        <div class="modal-body">
                            <div class="close">

                                <a href="#" data-dismiss="modal" class="close-button"></a>
                            </div>
                            <div class="modal-content-wrapper">
                                <h1 class="modal-head-text"></h1>
                                <span class="line"></span>

                                <p class="modal-body-text"></p>

                            </div>

                            <div class="modal-animation-wrapper">
                                <div class="animation">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section class="news-section" id="news" data-scroll-index="3">
            <?php
            $block = module_invoke('views', 'block_view', 'news-block_1');
            print render($block['content']);
            ?>

        </section>

        <section class="career-section" id="careers" data-scroll-index="4">

        =-CAREER!=-
        
        </section>
        <section class="contacts-section" id="contacts" data-scroll-index="5">
            <div class="map" id="map"></div>

            <div class="contacts-tab">
                <ul class="nav nav-pills">
                    <li class="active"><a data-toggle="pill" href="#main-office">Main Office</a>
                        <span class="line"></span>
                    </li>
                    <li><a data-toggle="pill" href="#dubai-office">Dubai-office</a>
                        <span class="line"></span></li>
                </ul>

                <div class="tab-content">
                    <div id="main-office" class="tab-pane fade in active">
                        <ul class="contact-address">
                            <ul class="contact-address">
                                <li><span class="icon pointer-icon"></span> <span class="address-text">
                                8 Kostolna str.<br>
                                5th floor<br>
                                Kyiv, 01001, Ukraine
                            </span></li>
                                <li><span class="icon phone-icon"></span> <span class="address-text">
                                Tel.: +380 (04) 492-75-99 <br>
                                Fax: +380 (44) 278-39-07
                                </span>
                                </li>
                                <li><span class="icon email-address-icon"></span> <span class="address-text">
                                gk@cfcentertainment.com
                                </span>
                                </li>
                            </ul>
                        </ul>
                    </div>
                    <div id="dubai-office" class="tab-pane fade">
                        <ul class="contact-address">
                            <li><span class="icon pointer-icon"></span> <span class="address-text">
                            Dubai Silicon Oasis <br>
                            Headquarters Building, <br>
                            4th floor, C&D Wing <br>
                            P.O. Box 341041, <br>
                            Dubai, UAE
                            </span></li>
                            <li><span class="icon phone-icon"></span> <span class="address-text">
                                Tel.: +971 (04) 3724637 <br>
                                Fax: +971 (04) 5015777
                                </span>
                            </li>
                            <li><span class="icon email-address-icon"></span> <span class="address-text">
                                gk@cfcentertainment.com
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>

        <div id="navigation">

            <?php if ($main_menu): ?>
                <nav class="navigation">

                    <div class="left-side-nav">
                        <!-- Language Panel -->
                        <?php print render($page['header']); ?>


                        <!-- Navigation Menu -->
                        <div class="nav-menu">
                            <div class="menu-icon">
                                <span class="line first"></span>
                                <span class="line second"></span>
                                <span class="line third"></span>
                            </div>

                            <a href="#" class="dropdown uppercase" id="menu_dropdown">Main</a>

                            <?php
                            // This code snippet is hard to modify. We recommend turning off the
                            // "Main menu" on your sub-theme's settings form, deleting this PHP
                            // code block, and, instead, using the "Menu block" module.
                            // @see https://drupal.org/project/menu_block
                            print theme('links__system_main_menu', array(
                                'links' => $main_menu,
                                'attributes' => array(
                                    'class' => array('dropdown-content', 'uppercase'),
                                    'id' => 'menu_dropdown_content'
                                ),
                                'heading' => array(
                                    'text' => t('Main menu'),
                                    'level' => 'h2',
                                    'class' => array('element-invisible'),
                                ),
                            )); ?>

                            <!-- Navigation Menu -->
                        </div>
                    </div>

                    <nav class="right-side-nav" id="current_position">
                        <!-- Icon Bar -->
                        <ul class="icon-bar">
                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>

                        </ul>
                        <!-- Icon Bar -->

                        <!-- Current Position -->
                        <?php
                            $block = module_invoke('block', 'block_view', '1');
                            print render($block['content']);
                        ?>
                        <!-- Current Position -->
                    </nav>
                </nav>
            <?php endif; ?>

            <?php print render($page['navigation']); ?>
        </div>
    </div>
</div>