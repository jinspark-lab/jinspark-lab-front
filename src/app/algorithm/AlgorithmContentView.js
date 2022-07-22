import React from 'react';

// TBD
const AlgorithmContentView = ({ }) => {
    const str = "int main(void) { cout<<'HelloWorld'<<endl; }";
    return (
        <div>
            Hello Algorithm
            <div>
                <pre>
                <code>
                    {str}
                </code>

                </pre>
            </div>
        </div>
    )
};
export default AlgorithmContentView;