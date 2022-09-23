<?php
/**
 * Plugin Name:       FII Gutenberg Blocks
 * Plugin URI: 				https://sputznik.com/
 * Description:       Custom Gutenberg Blocks
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Stephen Anil (Sputznik)
 * Author URI: 				https://sputznik.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       fii-gutenberg-blocks
 *
 * @package           fiigbl
 */

if( ! defined( 'ABSPATH' ) ){ exit; }

define( 'FIIGBL_PATH', plugin_dir_path( __FILE__ ) );

require_once('includes/class-fiigbl-admin.php');
