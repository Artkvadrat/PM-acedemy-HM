import React, { useState } from 'react';

import styles from './column.module.css';
import Card from "../Card/card";

const Column = ({name, backColor, cards, addCardHandler, onLike, onDislike, onChange}) => {

    const [ showingForm, setShowingForm ] = useState(false);

    const data = cards.filter((item) => item.type === name).sort((a, b) => {return  b.likes - a.likes});

     const showingFormHandler = (addCardHandler, columnName) => {

        const formHandler = (e) => {
            e.preventDefault();

            addCardHandler(e.target[0].value, columnName);
            setShowingForm(!showingForm);
        }

        if (showingForm) {
            return <form onSubmit={formHandler} className={styles.addCardForm}>
                <textarea required={true} cols="30" rows="3" maxLength={100}/>
                <button type="submit">Add card</button>
            </form>
        } else {
            return <button className={styles.addCardButton} onClick={() => setShowingForm(!showingForm)}>+ Write note</button>

        }
    }

    return (
        <div style={{backgroundColor: `#${backColor}`}} className={styles.column}>
            <div className={styles.columnHeader}>
                <h2>{name}</h2>
                <p>{data.length}</p>
            </div>
            {showingFormHandler(addCardHandler, name)}
            <hr/>
            {data.map((item) => {
                return <Card key={item.id}
                             title={item.title}
                             date={item.date}
                             likes={item.likes}
                             id={item.id}
                             onLike={onLike}
                             onDislike={onDislike}
                             onChange={onChange}/>
            })}
        </div>
    )
}

export default Column;
