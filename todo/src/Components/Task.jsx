import React from "react";

const Task = ({id, content, done}) =>{
    return <div id={id} class={done}>{content}</div>;
};

export default Task;