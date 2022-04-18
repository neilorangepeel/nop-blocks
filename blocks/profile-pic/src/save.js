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
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save() {
	return (
		<div {...useBlockProps.save()}>
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
						<a href="https://instagram.com/kristinickel/">
							Photo: Kristi Campbell
						</a>
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
