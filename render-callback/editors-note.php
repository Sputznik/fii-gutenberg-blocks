<?php global $fii_customize; ?>
<div <?php echo get_block_wrapper_attributes( array('class'=> 'fii-dec-bf fii-dec-af') ); ?>>
  <span class="title">» <?php echo $fii_customize->get_theme_option( 'translation', 'editors_note', 'Editors Note' ); ?>: </span><?php echo $atts['note']; ?>
</div>
