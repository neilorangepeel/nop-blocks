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
			<svg width="100%" height="auto" viewBox="0 0 300 290">
				<defs>
					<clipPath id="b">
						<path d="M67 29c72-38 180 9 203 54 22 46 22 121-17 155s-144 52-197 21C4 229-5 68 67 29z" />
					</clipPath>
					<path
						id="a"
						fill="none"
						d="M58 16c-80 43-70 223-12 257 58 33 175 14 219-24 43-38 43-122 18-173C258 26 138-27 58 16z"
					/>
				</defs>
				<text x="445" font-family="Brandon Text" font-size="13">
					<textPath href="#a">
						<a href="https://instagram">Photo: Kristi Campbell</a>
					</textPath>
				</text>
				<image
					width="300"
					height="290"
					clip-path="url(#b)"
					href="https://www.gravatar.com/avatar/9abb36e1a81e16c1dfd9ac41e64e45cd?s=600"
				/>
			</svg>
		</div>
	);
}
