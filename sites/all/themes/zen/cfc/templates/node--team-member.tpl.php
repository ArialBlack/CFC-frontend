<?php
/**
 * @file
 * Returns the HTML for a node.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728164
 Title	title	Node module element		
 
Language	language	Language selection		
 
URL path settings	path	Path module form elements		
 
Body	body	Long text and summary	Text area with a summary	edit	delete
 
Photo	field_image	Image	Image	edit	delete
 
Tags	field_tags	Term reference	Autocomplete term widget (tagging)	edit	delete
 
Linkedin	field_linkedin	Link	Link	edit	delete
 
Email	field_email	Email	Text field	edit	delete
 
Position	field_position
 */
?>

<article class="node-<?php print $node->nid; ?> <?php print $classes; ?> clearfix"<?php print $attributes; ?>>

<?php  hide($content); ?>

  <?php if ($title_prefix || $title_suffix || $display_submitted || $unpublished || !$page && $title): ?>
    <header>
      <?php print render($title_prefix); ?>
      <?php if (!$page && $title): ?>
        <h2<?php print $title_attributes; ?>><a href="<?php print $node_url; ?>"><?php print $title; ?></a></h2>
      <?php endif; ?>
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
   ?>

    <div class="image-wrapper">
        <?php print render($content['field_image']);?>
    </div>

    <div class="text-wrapper">
        <h2><?php print $title; ?></h2>
  
        <?php print render($content['field_position']);?>
  
        <?php print render($content['field_linkedin']);?>
  
        <?php print render($content['field_email']);?>
  
        <?php print render($content['body']);?>

        <?php print render($content); ?>


        <?php print render($content['links']); ?>
  </div>


    <?php print render($content['comments']); ?>

</article>