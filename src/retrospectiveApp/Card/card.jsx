import React, { useState } from 'react';

import styles from './card.module.css';

import likeImg from '../img/like.png';
import dislikeImg from '../img/dislike.png';
import editImg from '../img/edit.png';

const Card = ({title, likes, date, id, onLike, onDislike, onChange }) => {

    const [ changeCard, setChangeCard] = useState(false);

    const changeCardForm = (title, id, handler) => {

        const changeTitleFormHandler = (e) => {
            e.preventDefault();

            handler(id, e.target[0].value)

            setChangeCard(!changeCard);
        }

        if (changeCard) {
            return <form onSubmit={changeTitleFormHandler} className={styles.changeTitleForm}>
                <textarea required={true} cols="30" rows="3" defaultValue={title} maxLength={100}></textarea>
                <button type='submit'>Change Card</button>
            </form>
        } else {
            return <div className={styles.textRow}>
                <button onClick={() => setChangeCard(true)}>
                    <img src={editImg} alt="Edit"/>
                </button>
                <p>{title}</p>
            </div>
        }
    }


    /* if part of date has length 1 (like 1 hour) transform it to `0${value}` view
    *
    * 1 => 01
    *
    * @param {string} value - part of date
    * @return {string} value - updated part of date or not updated
    * */
    const addInStartOfDateZeroNumber = (value) => {
        if (value.toString().length === 1) {
            return `0${value}`
        } else {
            return value
        }
    }

    const showingDate = `${addInStartOfDateZeroNumber(date.getDate())}.${addInStartOfDateZeroNumber(date.getMonth())}.${date.getFullYear()} ${addInStartOfDateZeroNumber(date.getHours())}:${addInStartOfDateZeroNumber(date.getMinutes())}`;

    return (
        <div className={styles.card}>
            {changeCardForm(title, id, onChange)}
            <div className={styles.date}>
                {showingDate}
            </div>
            <div className={styles.likesRow}>
                <button onClick={() => onDislike(id)}>
                    <img src={dislikeImg} alt="Dislike"/>
                </button>
                <p>{likes}</p>
                <button onClick={() => onLike(id)}>
                    <img src={likeImg} alt="Like"/>
                </button>
            </div>
        </div>
    )
}

export default Card;
