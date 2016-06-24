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
              <div class="menu-icon">
                <span class="line first"></span>
                <span class="line second"></span>
                <span class="line third"></span>
              </div>
                <a href="#" class="dropdown uppercase" id="menu_dropdown">Menu</a>
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

          </div>
        </nav>
      <?php endif; ?>

      <?php print render($page['navigation']); ?>

    </div>
    
    

  </div>


</div>

