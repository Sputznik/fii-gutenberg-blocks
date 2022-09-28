import "./editor.scss";
import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes }) {
  const allowedFormats = [
    "core/bold",
    "core/italic",
    "core/link",
    "fiigbl-format/underline",
  ];
  return (
    <div {...useBlockProps()}>
      <h3>Editors Note</h3>
      <RichText
        placeholder="Editors Note"
        allowedFormats={allowedFormats}
        value={attributes.note}
        onChange={(note) => setAttributes({ note })}
      />
    </div>
  );
}
