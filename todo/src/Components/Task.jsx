import React from "react";

const Task = ({data2, data1}) =>{
    const [data, setData] = data1;
    const completeTask = (id) => {
        console.log('zuhdi hwa al hal');
        setData(prev => prev.map(item => {
            if(item.id === id)
                return {...item, done: !item.done};
            else return item;
        }));
    };
    const temp = data.filter(item => item.id === data2)[0];
    console.log(temp);
    return <div id={data2} className={`${temp.done}`} onClick = {(e) => completeTask(e.target.id)}>{temp.content}</div>;
};

export default Task;
