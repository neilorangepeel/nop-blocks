/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	return (
		<div {...useBlockProps()}>
			<div role="status" class="screen-reader-text js-color-mode-status"></div>
			<button class="toggle-button js-color-mode-toggle">
				<span class="screen-reader-text toggle-button__text js-color-mode-toggle-text">Enable dark mode</span>
				<svg class="toggle-button__icon" fill="var(--wp--preset--color--contrast)" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">
					<path class="icon_moon" d="M5.8 13.2a7 7 0 0 0 7.4-7.4 8 8 0 0 0-.8-3.8c3.3 1 5.6 4.3 5.6 8a8 8 0 0 1-8 8c-3.7 0-7-2.4-8-5.6a8 8 0 0 0 3.8.8Z"></path>
					<path class="icon_sun" d="M10.5 14.7v3.8h-1v-3.8h1Zm-4.18-1.73.7.7-2.68 2.7-.7-.71 2.68-2.69Zm7.36 0 2.68 2.69-.7.7-2.69-2.68.7-.7ZM10 6.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Zm0 1.1a2.65 2.65 0 1 0 0 5.3 2.65 2.65 0 0 0 0-5.3ZM5.3 9.5v1H1.5v-1h3.8Zm13.2 0v1h-3.8v-1h3.8Zm-2.84-5.86.7.7-2.69 2.7-.7-.71 2.69-2.7Zm-11.32 0 2.7 2.69-.71.7-2.7-2.69.71-.7ZM10.5 1.5v3.8h-1V1.5h1Z"></path>
				</svg>
			</button>
		</div>
	);
}
