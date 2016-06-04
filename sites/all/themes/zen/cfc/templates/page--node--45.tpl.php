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

    <div class="mobile-navigation-section">
        <nav class="mobile-navigation">
            <div class="menu-icon" id="mobile_menu_icon">
                <span class="line first"></span>
                <span class="line second"></span>
                <span class="line third"></span>
            </div>

            <a href="#" class="mobile-menu uppercase" id="mobile_menu">Main</a>

            <div id="side_nav_menu" class="side-nav-menu">
                <div class="top">
                    <span class="title uppercase">Main</span>
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
                <div class="footer">
                    <div class="phone"></div>
                </div>
            </div>

        </nav>
    </div>

    <div class="mobile-top-story-section">

    </div>

    <div class="mobile-news-section">

    </div>

    <div class="mobile-career-section">

    </div>


    <div class="loader animated zoomIn">
        <div class="loader-text">
            <div class="animated slideInDown appearence first">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 427.7 270.5" style="enable-background:new 0 0 427.7 270.5;" xml:space="preserve"
                     preserveAspectRatio="xMidYMid meet">
                    //logo
                    <g>
                        <path class="logo" d="M215.4,125.7h7.3l0.3-6.5h-8.1c-0.5-3-1.3-5.8-2.4-8.3h13c1.3-2.7,2.3-5,3.8-7h-30.1
		c3.5,4.9,6.9,12.6,6.9,21.4c0,7.1-2.2,13.5-4.9,18.2h9.4C213.5,138.9,215.3,132.6,215.4,125.7"/>
                        <path class="logo" d="M191.4,132.5c-2.1,2.3-5,3.7-8.4,3.7c-6.8,0-11.7-5.7-11.7-12.6c0-7,5-12.6,11.7-12.6c3.1,0,6,1.3,8.1,3.3
		c0,0,1.7-2,2.4-2.9c0.7-0.9,1.9-2.1,1.9-2.1c-3.4-3.9-8.3-6.4-14-6.4c-11.1,0-19.2,9.3-19.2,20.7c0,11.4,8.1,20.7,19.2,20.7
		c6,0,11-2.7,14.5-6.9c0,0-1.4-1.5-2.2-2.4C192.7,134.1,191.4,132.5,191.4,132.5"/>
                        <path class="logo" d="M257.7,132.6c-2.1,2.3-5,3.7-8.4,3.7c-6.8,0-11.7-5.7-11.7-12.6c0-7,5-12.6,11.7-12.6c3.1,0,6,1.3,8,3.3l4.3-5
		c-3.4-3.9-8.3-6.3-14-6.3c-11.1,0-19.2,9.3-19.2,20.7c0,11.4,8.1,20.7,19.2,20.7c5.9,0,11-2.7,14.5-6.9L257.7,132.6z"/>
                        <path class="logo" d="M181.1,158.7c0.9,0,1.7-0.3,2.2-0.9l0.5,0.5c-0.7,0.7-1.6,1.1-2.8,1.1c-2.3,0-3.9-1.6-3.9-3.9
		c0-2.3,1.6-3.9,3.9-3.9c1.1,0,2.1,0.4,2.8,1.1l-0.5,0.5c-0.5-0.6-1.3-0.9-2.2-0.9c-1.8,0-3,1.3-3,3.2
		C178.1,157.4,179.3,158.7,181.1,158.7"/>
                        <path class="logo" d="M189.8,151.6c2.3,0,3.8,1.6,3.8,3.9c0,2.3-1.6,3.9-3.8,3.9c-2.3,0-3.8-1.6-3.8-3.9
		C185.9,153.2,187.5,151.6,189.8,151.6 M189.8,158.7c1.8,0,3-1.3,3-3.2c0-1.9-1.2-3.2-3-3.2c-1.8,0-3,1.3-3,3.2
		C186.8,157.4,188,158.7,189.8,158.7"/>
                        <polygon class="logo" points="196.9,151.7 201.7,157.8 201.7,151.7 202.5,151.7 202.5,159.3 202,159.3 197.2,153.3 197.2,159.3
		196.4,159.3 196.4,151.7 	"/>
                        <path class="logo" d="M209.2,153.1c-0.4-0.4-1-0.7-1.6-0.7c-1,0-1.4,0.7-1.4,1.3c0,1.8,3.7,1.2,3.7,3.6c0,1.1-0.8,2.2-2.3,2.2
		c-0.9,0-1.8-0.4-2.4-1l0.5-0.5c0.4,0.5,1.2,0.8,1.8,0.8c1.1,0,1.6-0.8,1.6-1.4c0-1.7-3.7-1.1-3.7-3.6c0-1,0.7-2.1,2.1-2.1
		c0.8,0,1.6,0.3,2.2,0.9L209.2,153.1z"/>
                        <path class="logo" d="M217.4,151.7h0.8v4.9c0,1.7-1.2,2.9-2.8,2.9c-1.7,0-2.8-1.1-2.8-2.9v-4.9h0.8v4.9c0,1.3,0.8,2.1,2,2.1
		c1.2,0,2-0.9,2-2.1V151.7z"/>
                        <polygon class="logo"
                                 points="222.2,158.7 225.2,158.7 225.2,159.3 221.4,159.3 221.4,151.7 222.2,151.7 	"/>
                        <polygon class="logo" points="229.5,159.3 228.7,159.3 228.7,152.4 226.5,152.4 226.5,151.7 231.7,151.7 231.7,152.4 229.5,152.4
		"/>
                        <rect x="234.2" y="151.7" class="logo" width="0.8" height="7.6"/>
                        <polygon class="logo" points="238.7,151.7 243.4,157.8 243.4,151.7 244.3,151.7 244.3,159.3 243.7,159.3 239,153.3 239,159.3
		238.1,159.3 238.1,151.7 	"/>
                        <path class="logo" d="M250.9,155.3h2.8v3c-0.7,0.7-1.6,1.1-2.8,1.1c-2.3,0-3.8-1.6-3.8-3.9c0-2.3,1.6-3.9,3.8-3.9
		c1.1,0,2.1,0.4,2.8,1.1l-0.5,0.5c-0.5-0.6-1.3-0.9-2.2-0.9c-1.8,0-3,1.3-3,3.2c0,1.9,1.2,3.2,3,3.2c0.8,0,1.4-0.2,1.9-0.6v-2h-2
		V155.3z"/>
                    </g>
</svg>

            </div>


            <h1 class="animated slideInDown appearence third"><?php print t("Ideas"); ?></h1>

            <h1 class="animated slideInDown appearence fourth"><?php print t("in charge of solutions"); ?></h1>
        </div>

    </div>

    <div id="main" class="main">
        <section class="top-story-section" id="top_story" data-scroll-index="0">

            <div class="logo-container">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 427.7 270.5" style="enable-background:new 0 0 427.7 270.5;" xml:space="preserve"
                     preserveAspectRatio="xMidYMid meet">
                //lines
                    <g>
                        <path class="line" d="M195.6,151.8c5.4-6.9,10.4-14.9,10.5-26.6c0-11.6-5.1-19.6-10.5-26.6c-13.2-16.8-30.9-34.8-50-50.8
		c-10-8.3-40.5-28.2-72.2-47.9H73c31.8,19.8,62.5,39.8,72.5,48.1c19.1,15.9,36.8,33.9,50,50.7c5.4,6.9,10.4,14.9,10.4,26.4
		c0,11.5-5,19.5-10.4,26.4c-13.1,16.8-30.9,34.8-50,50.7c-13.7,11.4-63.9,43.8-103.4,68.1h0.5c39.4-24.3,89.4-56.5,103.1-67.9
		C164.7,186.6,182.5,168.6,195.6,151.8z"/>
                    </g>
                    <g>
                        <path class="line" fill="#FFFFFF" stroke="#c2c9d5" stroke-width="0.5" stroke-miterlimit="10" d="M94.8,91.5c8.7,20.6,21.2,39.1,37.1,55c15.9,15.9,34.4,28.4,55,37.1c21.3,9,44,13.6,67.3,13.6
		s46-4.6,67.3-13.6c20.6-8.7,39.1-21.2,55-37.1c15.9-15.9,28.4-34.4,37.1-55c9-21.3,13.6-44,13.6-67.3c0-8.2-0.6-16.2-1.7-24.2h-0.3
		c1.1,7.9,1.7,16,1.7,24.2c0,95.3-77.5,172.7-172.7,172.7S81.4,119.4,81.4,24.2C81.4,16,82,7.9,83.1,0h-0.3c-1.1,8-1.7,16-1.7,24.2
		C81.2,47.6,85.8,70.2,94.8,91.5z"/>
                    </g>
                    <g>
                        <path class="line" fill="#FFFFFF" stroke="#c2c9d5" stroke-width="0.5" stroke-miterlimit="10" d="M323.4,193.8c-95.3,0-172.8-77.5-172.8-172.8c0-7.1,0.4-14.2,1.3-21.1h-0.3c-0.8,7-1.3,14-1.3,21.1
		c0,23.4,4.6,46,13.6,67.3c8.7,20.6,21.2,39.1,37.1,55c15.9,15.9,34.4,28.4,55,37.1c21.3,9,44,13.6,67.3,13.6
		c23.4,0,46-4.6,67.3-13.6c13.2-5.6,25.6-12.8,37-21.4v-0.4C398.7,180.7,362.5,193.8,323.4,193.8z"/>
                    </g>
                    <g>
                        <path class="line" fill="#FFFFFF" stroke="#c2c9d5" stroke-width="0.5" stroke-miterlimit="10" d="M388.9,192.6c-95.3,0-172.8-77.5-172.8-172.8c0-6.7,0.4-13.3,1.1-19.8H217c-0.7,6.5-1.1,13.1-1.1,19.8
		c0,23.4,4.6,46,13.6,67.3c8.7,20.6,21.2,39.1,37.1,55c15.9,15.9,34.4,28.4,55,37.1c21.3,9,44,13.6,67.3,13.6
		c13.2,0,26.2-1.5,38.8-4.4v-0.3C415.2,191,402.2,192.6,388.9,192.6z"/>
                    </g>
                    <g>
                        <path class="line" fill="#FFFFFF" stroke="#c2c9d5" stroke-width="0.5" stroke-miterlimit="10" d="M233.2,151.7c-5.4-6.9-10.4-14.9-10.4-26.4c0-11.5,5-19.5,10.4-26.4c13.1-16.8,30.9-34.8,50-50.7
		c10.4-8.7,38.5-28.8,66.7-48.1h-0.4c-28.2,19.3-56.1,39.2-66.5,47.9c-19.1,15.9-36.8,34-50,50.8c-5.4,6.9-10.4,14.9-10.5,26.6
		c0,11.6,5.1,19.6,10.5,26.6c13.2,16.8,30.9,34.8,50,50.8c15.4,12.8,69.9,46.4,106.9,67.9h0.5c-37-21.5-91.9-55.3-107.3-68.1
		C264.1,186.5,246.3,168.4,233.2,151.7z"/>
                    </g>
                    <g>
                        <path class="line" fill="#FFFFFF" stroke="#c2c9d5" stroke-width="0.5" stroke-miterlimit="10" d="M218.4,224c0-95.3,77.5-172.8,172.8-172.8c12.5,0,24.7,1.4,36.5,3.9v-0.3c-11.9-2.6-24.1-3.9-36.5-3.9
		c-23.4,0-46,4.6-67.3,13.6c-20.6,8.7-39.1,21.2-55,37.1c-15.9,15.9-28.4,34.4-37.1,55c-9,21.3-13.6,44-13.6,67.3
		c0,15.9,2.1,31.5,6.3,46.5h0.3C220.7,255.7,218.4,240.1,218.4,224z"/>
                    </g>
                    <g>
                        <path class="line" fill="#FFFFFF" stroke="#c2c9d5" stroke-width="1" stroke-miterlimit="10" d="M152.1,218.7c0-88.4,71.9-160.2,160.2-160.2c45.3,0,86.2,18.9,115.3,49.1v-0.5c-0.6-0.6-1.2-1.3-1.9-1.9
		c-14.7-14.7-31.9-26.3-51-34.4C355,62.5,334,58.2,312.3,58.2c-21.7,0-42.7,4.2-62.5,12.6c-19.1,8.1-36.3,19.7-51,34.4
		c-14.7,14.7-26.3,31.9-34.4,51c-8.4,19.8-12.6,40.8-12.6,62.5c0,17.8,2.9,35.2,8.5,51.8h0.3C155.1,254.3,152.1,236.8,152.1,218.7z"
                            />
                    </g>
                    <g>
                        <path class="line" fill="#FFFFFF" stroke="#c2c9d5" stroke-width="1" stroke-miterlimit="10" d="M413.8,159.2c-8.7-20.6-21.2-39.1-37.1-55c-15.9-15.9-34.4-28.4-55-37.1c-21.3-9-44-13.6-67.3-13.6
		c-23.4,0-46,4.6-67.3,13.6c-20.6,8.7-39.1,21.2-55,37.1c-15.9,15.9-28.4,34.4-37.1,55c-9,21.3-13.6,44-13.6,67.3
		c0,15,1.9,29.7,5.6,44h0.3c-3.7-14.1-5.7-28.8-5.7-44c0-95.3,77.5-172.8,172.8-172.8c95.3,0,172.8,77.5,172.8,172.8
		c0,15.2-2,29.9-5.7,44h0.3c3.7-14.3,5.6-29,5.6-44C427.4,203.1,422.8,180.5,413.8,159.2z"/>
                    </g>

                    //logo

                    <g>
                        <path class="logo" d="M215.4,125.7h7.3l0.3-6.5h-8.1c-0.5-3-1.3-5.8-2.4-8.3h13c1.3-2.7,2.3-5,3.8-7h-30.1
		c3.5,4.9,6.9,12.6,6.9,21.4c0,7.1-2.2,13.5-4.9,18.2h9.4C213.5,138.9,215.3,132.6,215.4,125.7"/>
                        <path class="logo" d="M191.4,132.5c-2.1,2.3-5,3.7-8.4,3.7c-6.8,0-11.7-5.7-11.7-12.6c0-7,5-12.6,11.7-12.6c3.1,0,6,1.3,8.1,3.3
		c0,0,1.7-2,2.4-2.9c0.7-0.9,1.9-2.1,1.9-2.1c-3.4-3.9-8.3-6.4-14-6.4c-11.1,0-19.2,9.3-19.2,20.7c0,11.4,8.1,20.7,19.2,20.7
		c6,0,11-2.7,14.5-6.9c0,0-1.4-1.5-2.2-2.4C192.7,134.1,191.4,132.5,191.4,132.5"/>
                        <path class="logo" d="M257.7,132.6c-2.1,2.3-5,3.7-8.4,3.7c-6.8,0-11.7-5.7-11.7-12.6c0-7,5-12.6,11.7-12.6c3.1,0,6,1.3,8,3.3l4.3-5
		c-3.4-3.9-8.3-6.3-14-6.3c-11.1,0-19.2,9.3-19.2,20.7c0,11.4,8.1,20.7,19.2,20.7c5.9,0,11-2.7,14.5-6.9L257.7,132.6z"/>
                        <path class="logo" d="M181.1,158.7c0.9,0,1.7-0.3,2.2-0.9l0.5,0.5c-0.7,0.7-1.6,1.1-2.8,1.1c-2.3,0-3.9-1.6-3.9-3.9
		c0-2.3,1.6-3.9,3.9-3.9c1.1,0,2.1,0.4,2.8,1.1l-0.5,0.5c-0.5-0.6-1.3-0.9-2.2-0.9c-1.8,0-3,1.3-3,3.2
		C178.1,157.4,179.3,158.7,181.1,158.7"/>
                        <path class="logo" d="M189.8,151.6c2.3,0,3.8,1.6,3.8,3.9c0,2.3-1.6,3.9-3.8,3.9c-2.3,0-3.8-1.6-3.8-3.9
		C185.9,153.2,187.5,151.6,189.8,151.6 M189.8,158.7c1.8,0,3-1.3,3-3.2c0-1.9-1.2-3.2-3-3.2c-1.8,0-3,1.3-3,3.2
		C186.8,157.4,188,158.7,189.8,158.7"/>
                        <polygon class="logo" points="196.9,151.7 201.7,157.8 201.7,151.7 202.5,151.7 202.5,159.3 202,159.3 197.2,153.3 197.2,159.3
		196.4,159.3 196.4,151.7 	"/>
                        <path class="logo" d="M209.2,153.1c-0.4-0.4-1-0.7-1.6-0.7c-1,0-1.4,0.7-1.4,1.3c0,1.8,3.7,1.2,3.7,3.6c0,1.1-0.8,2.2-2.3,2.2
		c-0.9,0-1.8-0.4-2.4-1l0.5-0.5c0.4,0.5,1.2,0.8,1.8,0.8c1.1,0,1.6-0.8,1.6-1.4c0-1.7-3.7-1.1-3.7-3.6c0-1,0.7-2.1,2.1-2.1
		c0.8,0,1.6,0.3,2.2,0.9L209.2,153.1z"/>
                        <path class="logo" d="M217.4,151.7h0.8v4.9c0,1.7-1.2,2.9-2.8,2.9c-1.7,0-2.8-1.1-2.8-2.9v-4.9h0.8v4.9c0,1.3,0.8,2.1,2,2.1
		c1.2,0,2-0.9,2-2.1V151.7z"/>
                        <polygon class="logo"
                                 points="222.2,158.7 225.2,158.7 225.2,159.3 221.4,159.3 221.4,151.7 222.2,151.7 	"/>
                        <polygon class="logo" points="229.5,159.3 228.7,159.3 228.7,152.4 226.5,152.4 226.5,151.7 231.7,151.7 231.7,152.4 229.5,152.4
		"/>
                        <rect x="234.2" y="151.7" class="logo" width="0.8" height="7.6"/>
                        <polygon class="logo" points="238.7,151.7 243.4,157.8 243.4,151.7 244.3,151.7 244.3,159.3 243.7,159.3 239,153.3 239,159.3
		238.1,159.3 238.1,151.7 	"/>
                        <path class="logo" d="M250.9,155.3h2.8v3c-0.7,0.7-1.6,1.1-2.8,1.1c-2.3,0-3.8-1.6-3.8-3.9c0-2.3,1.6-3.9,3.8-3.9
		c1.1,0,2.1,0.4,2.8,1.1l-0.5,0.5c-0.5-0.6-1.3-0.9-2.2-0.9c-1.8,0-3,1.3-3,3.2c0,1.9,1.2,3.2,3,3.2c0.8,0,1.4-0.2,1.9-0.6v-2h-2
		V155.3z"/>
                    </g>
</svg>

            </div>

           <?php
           $block = module_invoke('views', 'block_view', 'frontteasers-block_3');
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
            <div class="background-text-wrapper">
                <span class="background-text telenor">telenor</span>
                <span class="background-text google">google</span>
                <span class="background-text sap">sap</span>
                <span class="background-text eyronext">nyse eyronext</span>
                <span class="background-text uber">uber</span>
            </div>
            <?php
            $block = module_invoke('views', 'block_view', 'frontteasers-block_2');
            print render($block['content']);
            ?>

        </section>

        <section class="news-section" id="news" data-scroll-index="3">
            <?php
            $block = module_invoke('views', 'block_view', 'news-block_1');
            print render($block['content']);
            ?>

        </section>

        <section class="career-section" id="careers" data-scroll-index="4">

        <?php
            $nid = 43;
            print drupal_render(node_view(node_load($nid)));
        ?>
        
        </section>
        <section class="contacts-section" id="contacts" data-scroll-index="5">

            <button class="trigger-btn" id="map_trigger_btn"></button>
            <div class="map" id="map"></div>

            <div class="contacts-tab">
                <ul class="nav nav-pills">
                    <li class="active"><a data-toggle="pill" href="#main-office">Kyiv Office</a>
                        <span class="line"></span>
                    </li>
                    <li><a data-toggle="pill" href="#dubai-office">Dubai Office</a>
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