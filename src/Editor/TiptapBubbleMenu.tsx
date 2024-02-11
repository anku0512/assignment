import React from 'react';
import {BubbleMenu, useCurrentEditor} from "@tiptap/react";
import {Button} from "@chakra-ui/react";


function TiptapBubbleMenu() {
    let editorContext = useCurrentEditor();

    let editor = editorContext.editor;
    return (
        editor && <BubbleMenu editor={editor}>
            <Button
                size='xs'
                onClick={() => editor?.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'is-active' : ''}>Bold
            </Button>
            <Button
                size='xs' onClick={() => editor?.chain().focus().toggleItalic().run()}
                className={editor.isActive("italic") ? "is-active" : ""}>Italic
            </Button>
            <Button
                size='xs'
                onClick={() => editor?.chain().focus().toggleBulletList().run()}
                className={editor.isActive("bulletList") ? "is-active" : ""}>
                List
            </Button>
            <Button
                size='xs'
                onClick={() => editor?.chain().focus().toggleBlockquote().run()}
                className={editor.isActive("blockquote") ? "is-active" : ""}>
                Quote
            </Button>
        </BubbleMenu>
    );
}

export default TiptapBubbleMenu;