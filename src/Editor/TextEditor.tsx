import React, {useEffect, useState} from 'react';
import {BubbleMenu, EditorProvider, generateHTML, useCurrentEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {USER_DATA_STORAGE_KEY} from "../App";
import {Box, Button} from "@chakra-ui/react";
import './style.css';

const extensions = [
    StarterKit,
]
const EDITOR_STORAGE_KEY = "editor_data_key"

function TextEditor() {
    const [content, setContent] = useState<any>("testing")
    const { editor } = useCurrentEditor()
    useEffect(() => {
        let x = localStorage.getItem(EDITOR_STORAGE_KEY)
        let y = localStorage.getItem(USER_DATA_STORAGE_KEY)
        if (!x && !y) {
            setContent("testing pagse")
        } else if (x && !y) {

        }
        console.log("here" + x)
        if (x) {
            setContent(x);
        }
    }, [content]);


    function handleOnUpdate(prop: any): void {
        //console.log("handleOnUpdate");
        //this will cause unnecessary re-renders setContent(prop.editor.getHTML());
        //console.log(prop.editor.getJSON());
        localStorage.setItem(EDITOR_STORAGE_KEY, prop.editor.getHTML())
    }

    return (
        <Box className='boxLayout'>
            {content && <EditorProvider extensions={extensions} onUpdate={handleOnUpdate} content={content} autofocus={true}>

                <BubbleMenu>
                    <Button size='xs'>Bold</Button>
                    <Button size='xs'>Italic</Button>
                </BubbleMenu>
            </EditorProvider>}
        </Box>


    )
}

const DUMMY_CONTENT6 = `<p>This is <strong>page 3d</strong></p>`

function _getHTMLFromJSON(content: any) {
    //console.log("getHTMLFromJSON for : " + JSON.stringify(content));
    if (content) {
        try {
            return generateHTML(content, extensions);
        } catch (e) {
            console.error(e);
            return generateHTML(DUMMY_JSON, extensions);
        }
    } else {
        return generateHTML(DUMMY_JSON, extensions);
    }
}

const DUMMY_JSON = {
    type: "doc",
    content: [
        {
            type: "paragraph",
            content: [
                {
                    type: "text",
                    text: "testing",
                },
            ],
        },
    ],
};

export default TextEditor;
