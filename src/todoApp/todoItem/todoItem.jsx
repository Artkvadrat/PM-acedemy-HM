import React from 'react';
import withTodoItem from "../enhancers/withTodoItem";
import classNames from 'classnames';

import styles from './todoItem.module.css';

const TodoItem = ({id, title, status, onStatusChange, changeHandler, searchValue}) => {

    let text;
    let index;

    if (searchValue) {
        index = title.indexOf(searchValue);
    } else {
        index = -1;
    }


    if (index === -1) {
        text = {__html: title}
    } else {
        let result = title.substr(0, index) + `<b>${searchValue}</b>` + title.substr(index+searchValue.length);
        text = {__html: result}
    }

    return <li className={classNames(styles.list, {
        [styles.done]: status,
    })}>
        <p dangerouslySetInnerHTML={text}/>
        <button onClick={() => {
            changeHandler(id);
            onStatusChange(id, status);
        }}>
            X
        </button>
    </li>
}

export default withTodoItem(TodoItem);