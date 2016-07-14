<?php
/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 */
?>

<div id="page">

    <div id="main">
        <div id="content" class="column news-feed" role="main">
            <?php print render($page['highlighted']); ?>
            <?php print $breadcrumb; ?>
            <?php print render($title_prefix); ?>
            <?php if ($title): ?>
                <h1 class="page__title title" id="page-title"><?php print $title; ?></h1>
            <?php endif; ?>
            <?php print render($title_suffix); ?>
            <?php print $messages; ?>
            <?php print render($tabs); ?>
            <?php print render($page['help']); ?>
            <?php if ($action_links): ?>
                <ul class="action-links"><?php print render($action_links); ?></ul>

            <?php endif; ?>
            <?php print render($page['content']); ?>
            <?php print $feed_icons; ?>
        </div>

        <div class="mobile-navigation-section">
            <nav class="mobile-navigation">
                <div class="menu-icon" id="mobile_menu_icon">
                    <span class="line first"></span>
                    <span class="line second"></span>
                    <span class="line third"></span>
                </div>

                <a href="#" class="mobile-menu uppercase" id="mobile_menu">Menu</a>

                <div class="logo-container">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 427.7 270.5" style="enable-background:new 0 0 427.7 270.5;" xml:space="preserve">

                      <!--                     logo-->
                        <g>
                            <path class="logo" d="M215.4,125.7h7.3l0.3-6.5h-8.1c-0.5-3-1.3-5.8-2.4-8.3h13c1.3-2.7,2.3-5,3.8-7h-30.1
		c3.5,4.9,6.9,12.6,6.9,21.4c0,7.1-2.2,13.5-4.9,18.2h9.4C213.5,138.9,215.3,132.6,215.4,125.7"/>
                            <path class="logo" d="M191.4,132.5c-2.1,2.3-5,3.7-8.4,3.7c-6.8,0-11.7-5.7-11.7-12.6c0-7,5-12.6,11.7-12.6c3.1,0,6,1.3,8.1,3.3
		c0,0,1.7-2,2.4-2.9s1.9-2.1,1.9-2.1c-3.4-3.9-8.3-6.4-14-6.4c-11.1,0-19.2,9.3-19.2,20.7s8.1,20.7,19.2,20.7c6,0,11-2.7,14.5-6.9
		c0,0-1.4-1.5-2.2-2.4C192.7,134.1,191.4,132.5,191.4,132.5"/>
                            <path class="logo" d="M257.7,132.6c-2.1,2.3-5,3.7-8.4,3.7c-6.8,0-11.7-5.7-11.7-12.6c0-7,5-12.6,11.7-12.6c3.1,0,6,1.3,8,3.3l4.3-5
		c-3.4-3.9-8.3-6.3-14-6.3c-11.1,0-19.2,9.3-19.2,20.7s8.1,20.7,19.2,20.7c5.9,0,11-2.7,14.5-6.9L257.7,132.6z"/>
                            <path class="logo" d="M181.1,158.7c0.9,0,1.7-0.3,2.2-0.9l0.5,0.5c-0.7,0.7-1.6,1.1-2.8,1.1c-2.3,0-3.9-1.6-3.9-3.9
		c0-2.3,1.6-3.9,3.9-3.9c1.1,0,2.1,0.4,2.8,1.1l-0.5,0.5c-0.5-0.6-1.3-0.9-2.2-0.9c-1.8,0-3,1.3-3,3.2
		C178.1,157.4,179.3,158.7,181.1,158.7"/>
                            <path class="logo" d="M189.8,151.6c2.3,0,3.8,1.6,3.8,3.9c0,2.3-1.6,3.9-3.8,3.9c-2.3,0-3.8-1.6-3.8-3.9
		C185.9,153.2,187.5,151.6,189.8,151.6 M189.8,158.7c1.8,0,3-1.3,3-3.2s-1.2-3.2-3-3.2s-3,1.3-3,3.2S188,158.7,189.8,158.7"/>
                            <polygon class="logo" points="196.9,151.7 201.7,157.8 201.7,151.7 202.5,151.7 202.5,159.3 202,159.3 197.2,153.3 197.2,159.3
		196.4,159.3 196.4,151.7 	"/>
                            <path class="logo" d="M209.2,153.1c-0.4-0.4-1-0.7-1.6-0.7c-1,0-1.4,0.7-1.4,1.3c0,1.8,3.7,1.2,3.7,3.6c0,1.1-0.8,2.2-2.3,2.2
		c-0.9,0-1.8-0.4-2.4-1l0.5-0.5c0.4,0.5,1.2,0.8,1.8,0.8c1.1,0,1.6-0.8,1.6-1.4c0-1.7-3.7-1.1-3.7-3.6c0-1,0.7-2.1,2.1-2.1
		c0.8,0,1.6,0.3,2.2,0.9L209.2,153.1z"/>
                            <path class="logo" d="M217.4,151.7h0.8v4.9c0,1.7-1.2,2.9-2.8,2.9c-1.7,0-2.8-1.1-2.8-2.9v-4.9h0.8v4.9c0,1.3,0.8,2.1,2,2.1
		s2-0.9,2-2.1V151.7z"/>
                            <polygon class="logo"
                                     points="222.2,158.7 225.2,158.7 225.2,159.3 221.4,159.3 221.4,151.7 222.2,151.7 	"/>
                            <polygon class="logo" points="229.5,159.3 228.7,159.3 228.7,152.4 226.5,152.4 226.5,151.7 231.7,151.7 231.7,152.4 229.5,152.4
		"/>
                            <rect x="234.2" y="151.7" class="logo" width="0.8" height="7.6"/>
                            <polygon class="logo" points="238.7,151.7 243.4,157.8 243.4,151.7 244.3,151.7 244.3,159.3 243.7,159.3 239,153.3 239,159.3
		238.1,159.3 238.1,151.7 	"/>
                            <path class="logo" d="M250.9,155.3h2.8v3c-0.7,0.7-1.6,1.1-2.8,1.1c-2.3,0-3.8-1.6-3.8-3.9c0-2.3,1.6-3.9,3.8-3.9
		c1.1,0,2.1,0.4,2.8,1.1l-0.5,0.5c-0.5-0.6-1.3-0.9-2.2-0.9c-1.8,0-3,1.3-3,3.2s1.2,3.2,3,3.2c0.8,0,1.4-0.2,1.9-0.6v-2h-2V155.3z"
                                />
                        </g>
</svg>
                </div>
                <div id="side_nav_menu" class="side-nav-menu">
                    <div class="top">
                        <span class="title uppercase">Menu</span>
                    <span class="arrow-close" id="close_mobile_menu">
                        <i class="fa fa-arrow-left"></i>
                    </span>
                    </div>
                    <div class="content">
                        <?php
                        // This code snippet is hard to modify. We recommend turning off the
                        // "Main menu" on your sub-theme's settings form, deleting this PHP
                        // code block, and, instead, using the "Menu block" module.
                        // @see https://drupal.org/project/menu_block
                        print theme('links__system_main_menu', array(
                            'links' => $main_menu,
                            'attributes' => array(
                                'class' => array('side-nav-menu-list', 'uppercase'),
                            ),
                            'heading' => array(
                                'text' => t('Main menu'),
                                'level' => 'h2',
                                'class' => array('element-invisible'),
                            ),
                        )); ?>

                        <?php print render($page['header']); ?>
                    </div>
                    <div class="social-icons">
                        <!-- Icon Bar -->
                        <ul class="icon-bar">
                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>

                        </ul>
                        <!-- Icon Bar -->
                    </div>
                    <div class="footer">
                        <div class="phone"></div>
                    </div>
                </div>

            </nav>
        </div>


        <div id="navigation">

            <?php if ($main_menu): ?>
                <nav class="navigation">

                    <div class="left-side-nav">
                        <!-- Language Panel -->
                        <?php print render($page['header']); ?>


                        <!-- Navigation Menu -->
                        <div class="nav-menu">
                            <div class="menu-icon" id="menu_icon">
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

                    <nav class="logo-wrapper">
                        <a href="/" data-scroll-goto="0">

                            <div class="logo-container">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 427.7 270.5" style="enable-background:new 0 0 427.7 270.5;"
                                     xml:space="preserve">
                        <!--                     logo-->
                                    <g>
                                        <path class="logo" d="M215.4,125.7h7.3l0.3-6.5h-8.1c-0.5-3-1.3-5.8-2.4-8.3h13c1.3-2.7,2.3-5,3.8-7h-30.1
		c3.5,4.9,6.9,12.6,6.9,21.4c0,7.1-2.2,13.5-4.9,18.2h9.4C213.5,138.9,215.3,132.6,215.4,125.7"/>
                                        <path class="logo" d="M191.4,132.5c-2.1,2.3-5,3.7-8.4,3.7c-6.8,0-11.7-5.7-11.7-12.6c0-7,5-12.6,11.7-12.6c3.1,0,6,1.3,8.1,3.3
		c0,0,1.7-2,2.4-2.9s1.9-2.1,1.9-2.1c-3.4-3.9-8.3-6.4-14-6.4c-11.1,0-19.2,9.3-19.2,20.7s8.1,20.7,19.2,20.7c6,0,11-2.7,14.5-6.9
		c0,0-1.4-1.5-2.2-2.4C192.7,134.1,191.4,132.5,191.4,132.5"/>
                                        <path class="logo" d="M257.7,132.6c-2.1,2.3-5,3.7-8.4,3.7c-6.8,0-11.7-5.7-11.7-12.6c0-7,5-12.6,11.7-12.6c3.1,0,6,1.3,8,3.3l4.3-5
		c-3.4-3.9-8.3-6.3-14-6.3c-11.1,0-19.2,9.3-19.2,20.7s8.1,20.7,19.2,20.7c5.9,0,11-2.7,14.5-6.9L257.7,132.6z"/>
                                        <path class="logo" d="M181.1,158.7c0.9,0,1.7-0.3,2.2-0.9l0.5,0.5c-0.7,0.7-1.6,1.1-2.8,1.1c-2.3,0-3.9-1.6-3.9-3.9
		c0-2.3,1.6-3.9,3.9-3.9c1.1,0,2.1,0.4,2.8,1.1l-0.5,0.5c-0.5-0.6-1.3-0.9-2.2-0.9c-1.8,0-3,1.3-3,3.2
		C178.1,157.4,179.3,158.7,181.1,158.7"/>
                                        <path class="logo" d="M189.8,151.6c2.3,0,3.8,1.6,3.8,3.9c0,2.3-1.6,3.9-3.8,3.9c-2.3,0-3.8-1.6-3.8-3.9
		C185.9,153.2,187.5,151.6,189.8,151.6 M189.8,158.7c1.8,0,3-1.3,3-3.2s-1.2-3.2-3-3.2s-3,1.3-3,3.2S188,158.7,189.8,158.7"/>
                                        <polygon class="logo" points="196.9,151.7 201.7,157.8 201.7,151.7 202.5,151.7 202.5,159.3 202,159.3 197.2,153.3 197.2,159.3
		196.4,159.3 196.4,151.7 	"/>
                                        <path class="logo" d="M209.2,153.1c-0.4-0.4-1-0.7-1.6-0.7c-1,0-1.4,0.7-1.4,1.3c0,1.8,3.7,1.2,3.7,3.6c0,1.1-0.8,2.2-2.3,2.2
		c-0.9,0-1.8-0.4-2.4-1l0.5-0.5c0.4,0.5,1.2,0.8,1.8,0.8c1.1,0,1.6-0.8,1.6-1.4c0-1.7-3.7-1.1-3.7-3.6c0-1,0.7-2.1,2.1-2.1
		c0.8,0,1.6,0.3,2.2,0.9L209.2,153.1z"/>
                                        <path class="logo" d="M217.4,151.7h0.8v4.9c0,1.7-1.2,2.9-2.8,2.9c-1.7,0-2.8-1.1-2.8-2.9v-4.9h0.8v4.9c0,1.3,0.8,2.1,2,2.1
		s2-0.9,2-2.1V151.7z"/>
                                        <polygon class="logo"
                                                 points="222.2,158.7 225.2,158.7 225.2,159.3 221.4,159.3 221.4,151.7 222.2,151.7 	"/>
                                        <polygon class="logo" points="229.5,159.3 228.7,159.3 228.7,152.4 226.5,152.4 226.5,151.7 231.7,151.7 231.7,152.4 229.5,152.4
		"/>
                                        <rect x="234.2" y="151.7" width="0.8" height="7.6"/>
                                        <polygon class="logo" points="238.7,151.7 243.4,157.8 243.4,151.7 244.3,151.7 244.3,159.3 243.7,159.3 239,153.3 239,159.3
		238.1,159.3 238.1,151.7 	"/>
                                        <path class="logo" d="M250.9,155.3h2.8v3c-0.7,0.7-1.6,1.1-2.8,1.1c-2.3,0-3.8-1.6-3.8-3.9c0-2.3,1.6-3.9,3.8-3.9
		c1.1,0,2.1,0.4,2.8,1.1l-0.5,0.5c-0.5-0.6-1.3-0.9-2.2-0.9c-1.8,0-3,1.3-3,3.2s1.2,3.2,3,3.2c0.8,0,1.4-0.2,1.9-0.6v-2h-2V155.3z"
                                            />
                                    </g>
</svg>
                            </div>
                        </a>
                    </nav>
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

