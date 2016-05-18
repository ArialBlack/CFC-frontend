<?php
/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 */
    global $language ;
    $lang = $language->language;
    
    if ($lang == 'uk') {
        $lang = 'ua';
    }
?>

<div id="page">

    <!--      <header class="header" id="header" role="banner">-->
    <!---->
    <!--        --><?php //if ($logo): ?>
    <!--          <a href="--><?php //print $front_page; ?><!--" title="-->
    <!--    --><?php //print t('Home'); ?><!--" rel="home" class="header__logo" id="logo"><img src="-->
    <!--    --><?php //print $logo; ?><!--" alt="-->
    <?php //print t('Home'); ?><!--" class="header__logo-image" /></a>-->
    <!--        --><?php //endif; ?>
    <!---->
    <!--        --><?php //if ($site_name || $site_slogan): ?>
    <!--          <div class="header__name-and-slogan" id="name-and-slogan">-->
    <!--            --><?php //if ($site_name): ?>
    <!--              <h1 class="header__site-name" id="site-name">-->
    <!--                <a href="--><?php //print $front_page; ?><!--" title="-->
    <!--    --><?php //print t('Home'); ?><!--" class="header__site-link" rel="home"><span>-->
    <!--    --><?php //print $site_name; ?><!--</span></a>-->
    <!--              </h1>-->
    <!--            --><?php //endif; ?>
    <!---->
    <!--            --><?php //if ($site_slogan): ?>
    <!--              <div class="header__site-slogan" id="site-slogan">--><?php //print $site_slogan; ?><!--</div>-->
    <!--            --><?php //endif; ?>
    <!--          </div>-->
    <!--        --><?php //endif; ?>
    <!---->
    <!--        --><?php //if ($secondary_menu): ?>
    <!--          <nav class="header__secondary-menu" id="secondary-menu" role="navigation">-->
    <!--            --><?php //print theme('links__system_secondary_menu', array(
    //              'links' => $secondary_menu,
    //              'attributes' => array(
    //                'class' => array('links', 'inline', 'clearfix'),
    //              ),
    //              'heading' => array(
    //                'text' => $secondary_menu_heading,
    //                'level' => 'h2',
    //                'class' => array('element-invisible'),
    //              ),
    //            )); ?>
    <!--          </nav>-->
    <!--        --><?php //endif; ?>
    <!---->
    <!--        --><?php //print render($page['header']); ?>
    <!---->
    <!--      </header>-->

    <!--    <div id="main" class="main-content main">-->
    <div id="main" class="main">
        <section class="top-story-section" id="top_story" data-scroll-index="0">
            <div class="logo">
            </div>


            <ul class="services">
                <li><a href="#">Goverment Relations <br> & Public Affairs</a></li>
                <li><a href="#">Investor Relations <br> & Financial Communications</a></li>
                <li><a href="#">Media Relations <br> & Public Affairs</a></li>
                <li><a href="#">Special Issues <br> & Crises Management</a></li>
                <li><a href="#"> Philantropy & Corporate <br> Social Responsibility</a></li>
                <li><a href="#">Promotion <br> & Event management</a></li>
            </ul>
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

            <!--            <ul class="services">-->
            <!--                <li><a href="#philantropy" data-toggle="modal"> Philantropy & Corporate <br> Social Responsibility-->
            <!--                        <span class="line"></span></a></li>-->
            <!--                <li><a href="#philantropy" data-toggle="modal">Goverment Relations <br> & Public Affairs-->
            <!--                        <span class="line"></span></a></li>-->
            <!--                <li><a href="#philantropy" data-toggle="modal">Investor Relations <br> & Financial Communications-->
            <!--                        <span class="line"></span></a></li>-->
            <!--                <li><a href="#philantropy" data-toggle="modal">Media Relations <br> & Public Affairs-->
            <!--                        <span class="line"></span>-->
            <!--                    </a></li>-->
            <!--                <li><a href="#philantropy" data-toggle="modal">Special Issues <br> & Crises Management-->
            <!--                        <span class="line"></span></a></li>-->
            <!---->
            <!--                <li><a href="#philantropy" data-toggle="modal">Promotion <br> & Event management-->
            <!--                        <span class="line"></span></a></li>-->
            <!--            </ul>-->
            <!---->
            <!---->
            <div class="modal fade" role="dialog" id="philantropy">
                <div class="modal-dialog">

                    <div class="modal-content">

                        <div class="modal-body">
                            <div class="close">

                                <a href="#" data-dismiss="modal" class="close-button"></a>
                            </div>
                            <div class="modal-content-wrapper">
                                <h1 class="modal-head-text">
                                    Philantropy & Corporate <br> Social Responsibility
                                </h1>
                                <span class="line"></span>

                                <p class="modal-body-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis quam<br>
                                    dignissim erat sodales, vitae fermentum augue faucibus. <br>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis quam
                                    dignissim erat sodales, vitae fermentum augue faucibus.
                                </p>

                                <p class="modal-body-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis quam<br>
                                    dignissim erat sodales, vitae fermentum augue faucibus. <br>
                                </p>
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
            <!--            <div class="news-item">-->
            <!--                <a class="news-info" href="#">-->
            <!--                    <h2 class="category">Category, Date</h2>-->
            <!---->
            <!--                    <h1 class="news-title">News 1</h1>-->
            <!---->
            <!--                    <p class="preview-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis quam-->
            <!--                        dignissim erat sodales, vitae fermentum augue faucibus. </p>-->
            <!---->
            <!--                </a>-->
            <!--            </div>-->
            <!---->
            <!--            <div class="news-item">-->
            <!--                <a class="news-info" href="#">-->
            <!--                    <h2 class="category">Category, Date</h2>-->
            <!---->
            <!--                    <h1 class="news-title">News 2</h1>-->
            <!---->
            <!---->
            <!--                    <p class="preview-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis quam-->
            <!--                        dignissim erat sodales, vitae fermentum augue faucibus. </p>-->
            <!---->
            <!---->
            <!--                </a>-->
            <!--            </div>-->
            <!---->
            <!---->
            <!--            <div class="news-item">-->
            <!--                <a class="news-info" href="#">-->
            <!--                    <h2 class="category">Category, Date</h2>-->
            <!---->
            <!--                    <h1 class="news-title">News 3</h1>-->
            <!---->
            <!---->
            <!--                    <p class="preview-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis quam-->
            <!--                        dignissim erat sodales, vitae fermentum augue faucibus. </p>-->
            <!---->
            <!---->
            <!--                </a>-->
            <!--            </div>-->
            <!--            <a href="#" class="all-news-btn uppercase">All news</a>-->
        </section>

        <section class="career-section" id="careers" data-scroll-index="4">

            <div class="text-wrapper">
                <h1 class="title-text uppercase">ideology of <br> company</h1>
                <span class="line"></span>

                <p class="about-us-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                    eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </p>

                <p class="about-us-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                    eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </p>


                <form class="cv-form" action="#">
                    <input type="text" class='form-input uppercase' placeholder="name">
                    <input type="text" class='form-input uppercase' placeholder="email">
                    <input type="file" id="cv" class='load-file'>
                    <label for="cv" class="label uppercase"><span class="icon"></span> <span
                            class="text">Upload CV</span></label>
                    <button type="submit" class="submit-btn uppercase">Send cv</button>
                </form>
            </div>
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

        <!--          <div id="content" class="column" role="main">-->
        <!--            --><?php //print render($page['highlighted']); ?>
        <!--            --><?php //print $breadcrumb; ?>
        <!--            <a id="main-content"></a>-->
        <!--            --><?php //print render($title_prefix); ?>
        <!--            --><?php //if ($title): ?>
        <!--              <h1 class="page__title title" id="page-title">--><?php //print $title; ?><!--</h1>-->
        <!--            --><?php //endif; ?>
        <!--            --><?php //print render($title_suffix); ?>
        <!--            --><?php //print $messages; ?>
        <!--            --><?php //print render($tabs); ?>
        <!--            --><?php //print render($page['help']); ?>
        <!--            --><?php //if ($action_links): ?>
        <!--              <ul class="action-links">--><?php //print render($action_links); ?><!--</ul>-->
        <!--            --><?php //endif; ?>
        <!---->
        <!---->
        <!--            --><?php //print render($page['content']); ?>
        <!---->
        <!--            <section id="section1">-->
        <!--            Ukrainian test-->
        <!---->
        <!--            1111111<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>-->
        <!--            1-->
        <!--            </section>-->
        <!---->
        <!--            <section id="section2">-->
        <!--              <h2>Команда</h2>-->
        <!--              --><?php
        //                  $block = module_invoke('views', 'block_view', 'team-block');
        //                  print render($block['content']);
        //              ?>
        <!--            </section>-->
        <!---->
        <!--            <section id="section3">-->
        <!--              <h2>Новини</h2>-->
        <!--              --><?php
        //                  $block = module_invoke('views', 'block_view', 'news-block_1');
        //                  print render($block['content']);
        //              ?>
        <!--            </section>-->
        <!---->
        <!--            <section id="section4">-->
        <!--              --><?php
        //                  $block = module_invoke('views', 'block_view', 'news-block_2');
        //                  print render($block['content']);
        //              ?>
        <!--            </section>-->
        <!---->
        <!---->
        <!--<!--            -->--><?php ////print $feed_icons; ?>
        <!--    </div>-->

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

                    <div class="right-side-nav">
                        <!-- Icon Bar -->
                        <ul class="icon-bar">
                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>

                        </ul>
                        <!-- Icon Bar -->

                        <!-- Current Position -->
                        <ul class="current-position" id="current_position">
                            <li><a href="#top_story" data-scroll-goto="0">top story</a></li>
                            <li><a href="#team" data-scroll-goto="1">our team</a></li>
                            <li><a href="#services" data-scroll-goto="2">services</a></li>
                            <li><a href="#news" data-scroll-goto="3">news</a></li>
                            <li><a href="#careers" data-scroll-goto="4">careers</a></li>
                            <li><a href="#contacts" data-scroll-goto="5">contacts</a>

                        </ul>
                        <!-- Current Position -->
                    </div>
                </nav>
            <?php endif; ?>

            <?php print render($page['navigation']); ?>

        </div>
    <!---->
    <!--    --><?php
    //      // Render the sidebars to see if there's anything in them.
    //      $sidebar_first  = render($page['sidebar_first']);
    //      $sidebar_second = render($page['sidebar_second']);
    //    ?>

    <!--    --><?php //if ($sidebar_first || $sidebar_second): ?>
    <!--      <aside class="sidebars">-->
    <!--        --><?php //print $sidebar_first; ?>
    <!--        --><?php //print $sidebar_second; ?>
    <!--      </aside>-->
    <!--    --><?php //endif; ?>

  </div>

<!--  --><?php //print render($page['footer']); ?>

</div>

<?php //print render($page['bottom']); ?>
