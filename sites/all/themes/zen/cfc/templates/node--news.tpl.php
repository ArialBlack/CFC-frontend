<?php
/**
 * @file
 * Returns the HTML for a node.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728164
 */
?>

<article class="node-<?php print $node->nid; ?> <?php print $classes; ?> clearfix"<?php print $attributes; ?>>

    <?php 

        print render($content['field_tags']);
        print $submitted;
    ?>

  <?php if ($title_prefix || $title_suffix || $display_submitted || $unpublished || !$page && $title): ?>
    <header>
      <?php print render($title_prefix); ?>
   
        <h2<?php print $title_attributes; ?>><?php print $title; ?></h2>
    
      <?php print render($title_suffix); ?>

      

      <?php if ($unpublished): ?>
        <mark class="unpublished"><?php print t('Unpublished'); ?></mark>
      <?php endif; ?>
    </header>
  <?php endif; ?>

  <?php
  

 
  
    // We hide the comments and links now so that we can render them later.
    hide($content['comments']);
    hide($content['links']);
    print render($content);
    
    
    
  ?>

  <?php print render($content['links']); ?>

  <?php print render($content['comments']); ?>

</article>
