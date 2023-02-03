import { EditorState } from 'draft-js';
import { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';


function TextEditor() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());



    return (
        <div className='border border-secondary mt-5'>
            <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
                toolbarClassName=""
                wrapperClassName=""
                editorClassName=""
                onContentStateChange={(contentState) => {
                    console.log(JSON.stringify(contentState));
                }
                }
            />
        </div>
    );
}

export default TextEditor;