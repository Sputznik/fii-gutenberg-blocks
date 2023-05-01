import "./editor.scss";
import { TextControl } from "@wordpress/components";
import { useBlockProps } from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes }) {
	return (
		<div {...useBlockProps()}>
			<h3>Read More</h3>
			<TextControl
				label="Link"
				value={attributes.url}
				onChange={(url) => setAttributes({ url })}
			/>
			<TextControl
				label="Link Text"
				value={attributes.text}
				onChange={(text) => setAttributes({ text })}
			/>
		</div>
	);
}
