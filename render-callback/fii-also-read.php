<?php global $fii_customize; ?>
<div <?php echo get_block_wrapper_attributes( array('class'=> 'fii-read fii-dec-bf fii-dec-af') ); ?>>
  <span class="title">» <?php echo $fii_customize->get_theme_option( 'translation', 'also_read', 'Also read' ); ?>: </span>
  <a href="<?php _e( $atts['url'] );?>"><?php _e( $atts['text'] );?></a>
</div>
