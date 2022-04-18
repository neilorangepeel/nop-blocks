<?php
/**
 * Plugin Name:       NOP Blocks
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       nop-blocks
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function create_block_nop_blocks_block_init()
{
	register_block_type(plugin_dir_path(__FILE__) . 'blocks/animated-logo/');
	register_block_type(plugin_dir_path(__FILE__) . 'blocks/dark-mode-toggle/');
	register_block_type(plugin_dir_path(__FILE__) . 'blocks/post-format/');
	register_block_type(plugin_dir_path(__FILE__) . 'blocks/project-type/');
	register_block_type(plugin_dir_path(__FILE__) . 'blocks/profile-pic/');
}
add_action('init', 'create_block_nop_blocks_block_init');
