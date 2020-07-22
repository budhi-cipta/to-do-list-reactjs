import React from 'react';


const ToDoList = () => {
    let toDo = ['Belajar react js','Belajar Component React Js','Belajar route React js']
    let result = toDo.map((todo) => {
    return (
        <li>{todo}</li>
    )
}
)
    return  (
        <div className='tengah'>
            <ul>
                {result}
            </ul>
        </div>
    )
}


export default ToDoList;

