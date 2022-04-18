// Block Registration Function
import { registerBlockVariation } from '@wordpress/blocks';

// Internationalization
import { __ } from '@wordpress/i18n';

// Icon
import { postCategories as icon } from '@wordpress/icons';

// https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-terms/variations.js
const variation = {
	name: 'project_type',
	title: __('Project Type'),
	description: __("Display a work's project type"),
	icon,
	isDefault: true,
	attributes: { term: 'project_type' },
	isActive: (blockAttributes) => blockAttributes.term === 'project_type'
};

registerBlockVariation( 'core/post-terms', variation );
