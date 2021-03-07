import React from 'react';
import withTodoItem from "../enhancers/withTodoItem";
import classNames from 'classnames';

import styles from './todoItem.module.css';

const TodoItem = ({id, title, status, onStatusChange, changeHandler}) => {

    return <li className={classNames(styles.list, {
        [styles.done]: status,
    })}>
        { title }
        <button onClick={() => {
            changeHandler(id);
            onStatusChange(id, status);
        }}>
            click
        </button>
    </li>
}

export default withTodoItem(TodoItem);