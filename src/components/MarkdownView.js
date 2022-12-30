import React from 'react';
import ReactMarkdown from 'react-markdown';

// Single Item represent text
const MarkdownView = ({ markdown }) => {
    return (
        <div style={{'textAlign': 'left', 'margin': 'auto'}}>
            <ReactMarkdown children={markdown} components={{
                img: ({...props}) => <img style={{maxWidth:1000, width: '100%', height: 'auto'}} {...props} />
            }} />
        </div>
    );
};

export default MarkdownView;
