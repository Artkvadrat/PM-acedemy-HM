import React from 'react';

import styles from './card.module.css';

import likeImg from '../img/like.png';
import dislikeImg from '../img/dislike.png';
import editImg from '../img/edit.png';

class Card extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            changeCard: false,
        }

        this.changeCard = this.changeCard.bind(this);
        this.changeTitleChangingFormShowState = this.changeTitleChangingFormShowState.bind(this);
    }

    /* if part of date has length 1 (like 1 hour) transform it to `0${value}` view
    *
    * 1 => 01
    *
    * @param {string} value - part of date
    * @return {string} value - updated part of date or not updated
    * */
    addInStartOfDateZeroNumber (value) {
        if (value.toString().length === 1) {
            return `0${value}`
        } else {
            return value
        }
    }

    changeTitleChangingFormShowState () {
        this.setState((prevState) => {
            return {
                changeCard: !prevState.changeCard
            }
        })
    }

    changeCard(title, id, handler) {

        const changeTitleFormHandler = (e) => {
            e.preventDefault();

            handler(id, e.target[0].value)

            this.changeTitleChangingFormShowState()
        }

        if (this.state.changeCard) {
            return <form onSubmit={changeTitleFormHandler} className={styles.changeTitleForm}>
                <textarea required={true} cols="30" rows="3" defaultValue={title} maxLength={100}></textarea>
                <button type='submit'>Change Card</button>
            </form>
        } else {
            return <div className={styles.textRow}>
                <button onClick={this.changeTitleChangingFormShowState}>
                    <img src={editImg} alt="Edit"/>
                </button>
                <p>{title}</p>
            </div>
        }
    }

    render() {

        const { addInStartOfDateZeroNumber, changeCard } = this;
        const {title, likes, date, id, onLike, onDislike, onChange } = this.props;

        const showingDate = `${addInStartOfDateZeroNumber(date.getDate())}.${addInStartOfDateZeroNumber(date.getMonth())}.${date.getFullYear()} ${addInStartOfDateZeroNumber(date.getHours())}:${addInStartOfDateZeroNumber(date.getMinutes())}`;

        return <div className={styles.card}>
            {changeCard(title, id, onChange)}
            <div>
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
    }
}

export default Card;
