import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';
import { useSelector } from "react-redux";

const CodeOutput = () => {
    const {outputCode, isCSS} = useSelector(state => state.direction);

    return (
        <div className='output-container'>
            <SyntaxHighlighter
                language='css'
                // style={dark}
                showLineNumbers
            >
                {outputCode}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeOutput;
