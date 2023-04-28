import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';
import { useDispatch, useSelector } from "react-redux";
import { setInputCode, setOutputCode } from "../features/directionSlice";

const CodeEditor = () => {
    const [code, setCode] = useState("");

    const dispatch = useDispatch();
    const { inputCode, isCSS } = useSelector((state) => state.direction);

    const handleCodeChange = (e) => {
        const newCode = e.target.value;
        setCode(newCode);
        dispatch(setInputCode(newCode));
    };

    useEffect(() => {
        const converter = async () => {
            if (inputCode && isCSS) {
                const res = await fetch("/api/direction", {
                    method: "POST",
                    body: JSON.stringify({ code: inputCode, isCss: isCSS }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const { result } = await res.json();
                dispatch(setOutputCode(result));
            }
        };

        converter();
    }, [inputCode]);

    return (
        <>
            <textarea
                className='editor'
                value={code}
                onChange={handleCodeChange}
            />
            <div className='editor-container'>
                <SyntaxHighlighter
                    language='css'
                    // style={dark}
                    showLineNumbers
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        </>
    );
};

export default CodeEditor;
