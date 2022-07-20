import React, { useState } from "react";


const Selection = (props) => {
    const [bg, updateSelectionStyle] = useState({ background: '' });
    const setBackGround = () => {
        props.applyColor(updateSelectionStyle);
    }
    return (<div className="fix-box" onClick={setBackGround} style={bg}>
        <h2 className="subheading">Selection</h2> 
    </div>)
}

export default Selection;
