import React from 'react';
import TodoItem from "../todoItem/todoItem";

const TodoItemsList = ({ todosArray, changeHandler} ) => {
    return (
        <div>
            <ul>
                { todosArray.length !== 0 ? todosArray.map( (item) => {
                    return <TodoItem key={item.id} id={item.id} status={item.completed} title={item.title} changeHandler={changeHandler}/>
                }) : '' }
            </ul>
        </div>
    )
}

export default TodoItemsList;