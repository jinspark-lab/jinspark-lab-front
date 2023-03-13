import React, { useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';

// Single Item represent text
const MarkdownEditor = ({ value, setValue }) => {
    useEffect(()=> {
    }, []);
    return (
        <div className='p-2'>
            <div className='form-group admin-form' data-color-mode="light">
                <MDEditor
                  value={value}
                  onChange={setValue}
                  height={650}
                />
            </div>
        </div>
    );
};

export default MarkdownEditor;
