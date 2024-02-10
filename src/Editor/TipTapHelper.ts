import {Editor} from "@tiptap/react";

export function insertContentHelper(editor: Editor, content: any): void {
    if (!_validateEditor(editor)) {
        return;
    }
    //console.log(JSON.stringify(editorContext.editor.getJSON()));
    editor.chain().insertContent(content).run();
}

function _validateEditor(editor: Editor): boolean {
    if (!editor) {
        console.error("Editor in EditorContext is invalid: " + editor);
        return false;
    }
    return true;
}