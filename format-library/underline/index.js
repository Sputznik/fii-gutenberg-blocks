/**
 * WordPress dependencies.
 */
import { useSelect } from "@wordpress/data";
import { formatUnderline } from "@wordpress/icons";
import {
  RichTextToolbarButton,
  RichTextShortcut,
} from "@wordpress/block-editor";
import { toggleFormat } from "@wordpress/rich-text";

const title = "Underline";
const name = "fiigbl-format/underline";

export const underline = {
  name,
  title,
  tagName: "u",
  className: null,
  edit({ isActive, onChange, value }) {
    const selectedBlock = useSelect((select) => {
      return select("core/block-editor").getSelectedBlock();
    }, []);

    // ENABLE ONLY ON EDITORS-NOTE BLOCK
    if (selectedBlock && selectedBlock.name !== "fiigbl/editors-note") {
      return null;
    }

    const onToggle = () => {
      onChange(
        toggleFormat(value, {
          type: name,
          title,
        })
      );
    };

    return (
      <>
        <RichTextShortcut type="primary" character="u" onUse={onToggle} />
        <RichTextToolbarButton
          icon={formatUnderline}
          title={title}
          onClick={onToggle}
          isActive={isActive}
          shortcutCharacter="u"
          shortcutType="primary"
          role="menuitemcheckbox"
        />
      </>
    );
  },
};
