import React from "react";

function Line(props)
{
    const color = props.color;
    return <div className="w-10 h-[2px] md:mr-3" style={{ backgroundColor: color }}></div>;
}

export default Line;
