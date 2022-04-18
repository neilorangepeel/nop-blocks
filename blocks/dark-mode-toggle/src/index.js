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
import './editor.js';

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
const moonIcon = el('svg', { width: 20, height: 20 },
el('path', { d: "M5.8 13.2a7 7 0 0 0 7.4-7.4 8 8 0 0 0-.8-3.8c3.3 1 5.6 4.3 5.6 8a8 8 0 0 1-8 8c-3.7 0-7-2.4-8-5.6a8 8 0 0 0 3.8.8Z" } )
);

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('nop-blocks/dark-mode-toggle', {
	/**
	 * Registering new block icon
	 */
	icon: moonIcon,

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
