import React from "react";
import Task from "./Task";

const List = ({data}) => {
    console.log(data);
    return <div>
        {data.map(item => <Task data = {item}/>)}
        <button>Clear Completed</button>
    </div>;
};

export default List;