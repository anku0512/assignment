import React, {useEffect, useState} from 'react';
import {EditorProvider, generateHTML} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {USER_DATA_STORAGE_KEY} from "../App";
import './style.css';
import TiptapBubbleMenu from "./TiptapBubbleMenu";

const extensions = [
    StarterKit
]
const EDITOR_STORAGE_KEY = "editor_data_key"

function TextEditor() {
    const [content, setContent] = useState<any>('<p>init</p>')


    useEffect(() => {
        let x = localStorage.getItem(EDITOR_STORAGE_KEY)
        let y = localStorage.getItem(USER_DATA_STORAGE_KEY)

        // if user data is present then update it in the text editor
        if (y) {
            // if storage data is already present so remove the old user data from editor data if present and add new
            // else just add user data
            if (x && x.includes('<blockquote>')) {
                let split = x.split('</blockquote>');
                x = `<blockquote>${y}</blockquote>` + split[split.length - 1]
            } else {
                x = `<blockquote>${y}</blockquote>` + (x ? x : "");
            }
        }
        setContent(x)
    }, []);


    function handleOnUpdate(prop: any): void {
        localStorage.setItem(EDITOR_STORAGE_KEY, prop.editor.getHTML())
    }

    return (
        <div className='boxTiptap'>
            {content &&
                <EditorProvider key={content} extensions={extensions} onUpdate={handleOnUpdate} content={content}
                                autofocus={true}>
                    <TiptapBubbleMenu/>
                </EditorProvider>}
        </div>
    )
}

export default TextEditor;
