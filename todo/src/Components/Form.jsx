import React, { useState } from "react";

const Form = () => {
    const [data, setData] = useState(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []);
    const [input, setInput] = useState('');
    const [id, setId] = useState(localStorage.getItem('id') ? localStorage.getItem('id') - 0 : 0);

    const addTask = (e) => {
        e.preventDefault();
        setData(prev =>{
            const temp = [...prev, {id, content: input, done: false}];
            localStorage.setItem('tasks',JSON.stringify(temp));
            return temp;
        });
        setId(prev => {
            localStorage.setItem('id', prev + 1);
            return prev + 1;
        });
    };
    return <form onSubmit = {addTask}>
        <input type="text" placeholder = "Enter task name ..." onChange = {(e) => setInput(() => e.target.value)}/>
        <input type="submit" value="Add"/>
    </form>;
};

export default Form;