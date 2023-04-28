import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import {
    setInputCode,
    setOutputCode,
    setIsCSS,
} from "../features/directionSlice";
import { compile } from "../helpers/direction-converter.js";

const Direction = () => {
    const dispatch = useDispatch();
    const { inputCode, outputCode, isCSS } = useSelector(
        (state) => state.direction
    );
    const [isEditing, setIsEditing] = useState(false);

    const handleCodeChange = (code) => {
        dispatch(setInputCode(code));
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(outputCode);
    };

    const handleToggle = () => {
        dispatch(setIsCSS(!isCSS));
        dispatch(setOutputCode(""));
    };

    const handleCompile = async () => {
        const compiledCode = await compile(inputCode, isCSS);
        dispatch(setOutputCode(compiledCode));
    };

    const handleStartEditing = () => {
        setIsEditing(true);
    };

    const handleEndEditing = () => {
        setIsEditing(false);
        handleCompile();
    };

    return (
        <div className='direction'>
            <div className='input'>
                <SyntaxHighlighter
                    language={isCSS ? "css" : "scss"}
                    style={tomorrow}
                    showLineNumbers
                    wrapLines={!isEditing}
                    lineNumberContainerStyle={{
                        minWidth: "2em",
                        marginRight: "1em",
                    }}
                    lineNumberStyle={{ color: "#777" }}
                    textareaClassName='direction__textarea'
                    value={inputCode}
                    onEdit={handleCodeChange}
                    onFocus={handleStartEditing}
                    onBlur={handleEndEditing}
                    tabIndex='0'
                    contentEditable={isEditing}
                />
            </div>
            <div className='output'>
                <SyntaxHighlighter
                    language={isCSS ? "css" : "scss"}
                    style={tomorrow}
                    showLineNumbers
                    wrapLines={!isEditing}
                    lineNumberContainerStyle={{
                        minWidth: "2em",
                        marginRight: "1em",
                    }}
                    lineNumberStyle={{ color: "#777" }}
                    textareaClassName='direction__textarea'
                    value={outputCode}
                    readOnly
                />
                <div className='output-controls'>
                    <button
                        className='output-controls__button'
                        onClick={handleCopy}
                    >
                        Copy
                    </button>
                    <button
                        className='output-controls__button'
                        onClick={handleToggle}
                    >
                        {isCSS ? "SCSS" : "CSS"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Direction;
