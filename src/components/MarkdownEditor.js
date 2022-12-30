import React, { useState, useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';

// Single Item represent text
const MarkdownEditor = ({ value, setValue }) => {
    // const [content, setContent] = useState("**Hello World!**");
    useEffect(()=> {
    }, []);
    return (
        <div className='p-2'>
            <div className='form-group admin-form' data-color-mode="light">
                <MDEditor
                  value={value}
                  onChange={setValue}
                />
            </div>
        </div>
    );
};

export default MarkdownEditor;
