/**
 * WordPress dependencies
 */

import { registerFormatType } from "@wordpress/rich-text";

/**
 * Internal dependencies
 */
import { underline } from "./underline";

registerFormatType("fiigbl-format/underline", underline);
