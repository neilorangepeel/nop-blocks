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
			<svg class="nop-logo" width="110" height="110" viewBox="0 0 110 110">
				<text class="nop-logo--lettering" fill="var(--wp--preset--color--contrast)" font-family="Brandon Text" font-size="15" letter-spacing="-.3" transform="rotate(-45 54.5 54.5)">
					<tspan x="-6.57" y="60">neilorangepeel.com</tspan>
				</text>
				<path class="nop-logo--icon" stroke="var(--wp--preset--color--contrast)" stroke-width="2.3" fill="none" d="M55 20a35 35 0 1 1 0 70h-6.36A28.64 28.64 0 0 1 20 61.36V55a35 35 0 0 1 35-35Zm0 6.36A28.64 28.64 0 0 0 26.36 55v6.36c0 12.3 9.98 22.28 22.28 22.28H55a28.64 28.64 0 0 0 0-57.28Zm0 6.37a22.27 22.27 0 1 1 0 44.54 22.27 22.27 0 0 1 0-44.54Zm0 6.36a15.9 15.9 0 1 0 0 31.82 15.9 15.9 0 0 0 0-31.82Zm.09 6.45a9.55 9.55 0 0 1 9.54 9.55 3.18 3.18 0 1 1-6.36 0 3.18 3.18 0 1 0-6.36 0 3.18 3.18 0 0 1-6.37 0 9.55 9.55 0 0 1 9.55-9.55Z"/>
			</svg>
		</div>
	);
}
