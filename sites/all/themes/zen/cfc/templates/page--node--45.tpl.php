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
    <!---->
    <!--  <header class="header" id="header" role="banner">-->
    <!---->
    <!--    --><?php //if ($logo): ?>
    <!--      <a href="--><?php //print $front_page; ?><!--" title="-->
    <?php //print t('Home'); ?><!--" rel="home" class="header__logo" id="logo"><img src="-->
    <?php //print $logo; ?><!--" alt="--><?php //print t('Home'); ?><!--" class="header__logo-image" /></a>-->
    <!--    --><?php //endif; ?>
    <!---->
    <!--    --><?php //if ($site_name || $site_slogan): ?>
    <!--      <div class="header__name-and-slogan" id="name-and-slogan">-->
    <!--        --><?php //if ($site_name): ?>
    <!--          <h1 class="header__site-name" id="site-name">-->
    <!--            <a href="--><?php //print $front_page; ?><!--" title="-->
    <?php //print t('Home'); ?><!--" class="header__site-link" rel="home"><span>-->
    <?php //print $site_name; ?><!--</span></a>-->
    <!--          </h1>-->
    <!--        --><?php //endif; ?>
    <!---->
    <!--        --><?php //if ($site_slogan): ?>
    <!--          <div class="header__site-slogan" id="site-slogan">--><?php //print $site_slogan; ?><!--</div>-->
    <!--        --><?php //endif; ?>
    <!--      </div>-->
    <!--    --><?php //endif; ?>
    <!---->
    <!--    --><?php //if ($secondary_menu): ?>
    <!--      <nav class="header__secondary-menu" id="secondary-menu" role="navigation">-->
    <!--        --><?php //print theme('links__system_secondary_menu', array(
    //          'links' => $secondary_menu,
    //          'attributes' => array(
    //            'class' => array('links', 'inline', 'clearfix'),
    //          ),
    //          'heading' => array(
    //            'text' => $secondary_menu_heading,
    //            'level' => 'h2',
    //            'class' => array('element-invisible'),
    //          ),
    //        )); ?>
    <!--      </nav>-->
    <!--    --><?php //endif; ?>
    <!---->
    <!--    --><?php //print render($page['header']); ?>
    <!---->
    <!--  </header>-->

  <div id="main">

      <!--    <div id="content" class="column" role="main">-->
      <!--      --><?php //print render($page['highlighted']); ?>
      <!--      --><?php //print $breadcrumb; ?>
      <!--      <a id="main-content"></a>-->
      <!--      --><?php //print render($title_prefix); ?>
      <!--      --><?php //if ($title): ?>
      <!--        <h1 class="page__title title" id="page-title">--><?php //print $title; ?><!--</h1>-->
      <!--      --><?php //endif; ?>
      <!--      --><?php //print render($title_suffix); ?>
      <!--      --><?php //print $messages; ?>
      <!--      --><?php //print render($tabs); ?>
      <!--      --><?php //print render($page['help']); ?>
      <!--      --><?php //if ($action_links): ?>
      <!--        <ul class="action-links">--><?php //print render($action_links); ?><!--</ul>-->
      <!--      --><?php //endif; ?>
      <!--      -->
      <!--      --><?php //print render($page['content']); ?>

      <!--      <section id="section1">-->
      <!--      English test-->
      <!---->
      <!--      </section>-->
      <!--      -->
      <!--      <section id="section2">-->
      <!--        <h2>Team</h2>-->
      <!--        --><?php //
      //            $block = module_invoke('views', 'block_view', 'team-block');
      //            print render($block['content']);
      //        ?>
      <!--      </section>-->
      <!--      -->
      <!--      <section id="section3">-->
      <!--        <h2>News</h2>-->
      <!--        --><?php //
      //            $block = module_invoke('views', 'block_view', 'news-block_1');
      //            print render($block['content']);
      //        ?>
      <!--      </section>-->
      <!--      -->
      <!--      <section id="section4">        -->
      <!--        --><?php //
      //            $block = module_invoke('views', 'block_view', 'news-block_2');
      //            print render($block['content']);
      //        ?>
      <!--      </section>-->
      <!--      -->
      <!--      -->
      <!--      --><?php //print $feed_icons; ?>
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
                      <li><i class="fa fa-google-plus"></i></li>
                      <li><i class="fa fa-instagram"></i></li>
                      <li><i class="fa fa-twitter"></i></li>
                      <li><i class="fa fa-facebook"></i></li>

                  </ul>
                  <!-- Icon Bar -->

                  <!-- Current Position -->
                  <ul class="current-position">
                      <li class="section-spy "><a href="#">top story</a></li>
                      <li class="section-spy "><a href="#">our team</a></li>
                      <li class="section-spy "><a href="#">services</a></li>
                      <li class="section-spy "><a href="#">news</a></li>
                      <li class="section-spy "><a href="#">careers</a></li>
                      <li class="section-spy "><a href="#">contacts</a>

                  </ul>
                  <!-- Current Position -->
              </div>
        </nav>
      <?php endif; ?>

      <?php print render($page['navigation']); ?>

    </div>

      <!--    --><?php
      //      // Render the sidebars to see if there's anything in them.
      //      $sidebar_first  = render($page['sidebar_first']);
      //      $sidebar_second = render($page['sidebar_second']);
      //    ?>
      <!---->
      <!--    --><?php //if ($sidebar_first || $sidebar_second): ?>
      <!--      <aside class="sidebars">-->
      <!--        --><?php //print $sidebar_first; ?>
      <!--        --><?php //print $sidebar_second; ?>
      <!--      </aside>-->
      <!--    --><?php //endif; ?>

  </div>
    <!---->
    <!--  --><?php //print render($page['footer']); ?>

</div>

<?php //print render($page['bottom']); ?>
