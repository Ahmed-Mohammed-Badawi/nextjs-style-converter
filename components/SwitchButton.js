import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsCSS } from "../features/directionSlice";

const SwitchButton = () => {
    const dispatch = useDispatch();
    const isCSS = useSelector((state) => state.direction.isCSS);

    const handleClick = () => {
        dispatch(setIsCSS(!isCSS));
    };

    return (
        <div className='switch-button-container'>
            <button onClick={handleClick}>
                {isCSS ? "Switch to SCSS" : "Switch to CSS"}
            </button>
        </div>
    );
};

export default SwitchButton;
