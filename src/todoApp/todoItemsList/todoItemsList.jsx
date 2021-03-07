import React from 'react';
import TodoItem from "../todoItem/todoItem";

import styles from './todoItemsList.module.css';

const TodoItemsList = ({ todosArray, changeHandler, searchValue} ) => {
    return (
        <div className={styles.itemList}>
            <ul>
                { todosArray.length !== 0 ? todosArray.map( (item) => {
                    return <TodoItem key={item.id}
                                     id={item.id}
                                     status={item.completed}
                                     title={item.title}
                                     changeHandler={changeHandler}
                                     searchValue={searchValue}/>
                }) : '' }
            </ul>
        </div>
    )
}

export default TodoItemsList;