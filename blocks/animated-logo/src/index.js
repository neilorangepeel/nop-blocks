/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Import the element creator function (React abstraction layer)
 */
const el = wp.element.createElement;
/**
 * neilorangepeel logo svg
*/
const nopLogo = el('svg', { width: 20, height: 20 },
el('path', { d: "M10 1a9 9 0 0 1 0 18H8.4A7.4 7.4 0 0 1 1 11.6V10c0-5 4-9 9-9Zm0 1.6C6 2.6 2.6 6 2.6 10v1.6c0 3.2 2.6 5.8 5.8 5.8H10a7.4 7.4 0 1 0 0-14.8Zm0 1.7a5.7 5.7 0 1 1 0 11.4 5.7 5.7 0 0 1 0-11.4Zm0 1.6a4 4 0 1 0 0 8.2 4 4 0 0 0 0-8.2Zm0 1.7c1.4 0 2.5 1 2.5 2.4a.8.8 0 0 1-1.6.1V10a.8.8 0 0 0-1.7 0v.2a.8.8 0 0 1-1.6 0c0-1.4 1-2.5 2.4-2.5Z" } )
);

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('nop-blocks/animated-logo', {
	/**
	 * Registering new block icon
	 */
	icon: nopLogo,

	/**
	 * Enable block preview
	 */
	example: {},

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});
