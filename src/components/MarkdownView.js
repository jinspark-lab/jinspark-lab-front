import React from 'react';
import ReactMarkdown from 'react-markdown';

// Single Item represent text
const MarkdownView = ({ markdown }) => {
    return (
        <div>
            <ReactMarkdown children={markdown} />
        </div>
    );
};

export default MarkdownView;
