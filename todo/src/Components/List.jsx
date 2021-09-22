import React from "react";
import Task from "./Task";

const List = ({data1}) => {
    const [data, setData] = data1;
    const deleteCompleted = () => {
        setData(prev =>{
            const temp = prev.filter(item => !item.done);
            localStorage.setItem('tasks',JSON.stringify(temp));
            return temp;
        });
    };
    return <div>
        {data.map(item => <Task data2 = {item.id} data1 = {data1}/>)}
        <button onClick = {deleteCompleted}>Clear Completed</button>
    </div>;
};

export default List;