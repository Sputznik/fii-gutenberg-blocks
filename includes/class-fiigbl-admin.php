<?php

class FIIGBL_ADMIN {

  function __construct(){

    // ADD CUSTOM BLOCKS CATEGORY
    add_filter( 'block_categories_all' , function( $categories ) {
    	$categories[] = array(
    		'slug'  => 'fii-gutenberg-blocks',
    		'title' => 'FII Blocks'
    	);
    	return $categories;
    } );


    add_action( 'init', array( $this, 'fiigbl_blocks_init' ) ); // REGISTER BLOCKS
    add_filter( 'allowed_block_types_all', array( $this, 'filter_allowed_block_types' ) );
  }

  function filter_allowed_block_types( $allowed_block_types ) {
    global $post;

    // GET ALL THE REGISTERED BLOCKS
    $blocks = WP_Block_Type_Registry::get_instance()->get_all_registered();

    // ENABLE EDITORS-NOTE BLOCK ONLY ON POSTS
    if ( 'post' != $post->post_type ) {
      unset( $blocks[ 'fiigbl/editors-note' ] );
      unset( $blocks[ 'fiigbl/fii-also-read' ] );
    }

    return array_keys( $blocks ); // RETURN THE NEW LIST OF ALLOWED BLOCKS
  }

  function fiigbl_blocks_init(){
    $blocks = array(
  		'editors-note' => array(
  			'render'	=> true
  		),
      'fii-also-read' => array(
        'render'	=> true
      )
  	);

  	foreach ( $blocks as $block => $args ) {
  		register_block_type(
  			FIIGBL_PATH . 'includes/block-editor/blocks/' . $block,
  			array(
  				'render_callback' => $args['render'] ? array( $this, 'render_callback' ) : null
  			)
  		 );
  	}
  }

  // CALLBACK TO RENDER DYNAMIC BLOCKS
  function render_callback( $atts, $content, $block  ){
  	$block_name = explode( "/", $block->name )[1];
  	ob_start();
  	require( FIIGBL_PATH . "render-callback/$block_name.php" );
  	return ob_get_clean();
  }

}

new FIIGBL_ADMIN();
