import React from 'react';

import styles from './column.module.css';
import Card from "../Card/card";

class Column extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showingForm: false,
        }

        this.showingFormHandler = this.showingFormHandler.bind(this);
        this.changeShowingFormState = this.changeShowingFormState.bind(this);
    }

    changeShowingFormState () {
        this.setState((prevState) => {
            return {
                showingForm: !prevState.showingForm
            }
        })
    }

    showingFormHandler(addCardHandler, columnName) {

        const formHandler = (e) => {
            e.preventDefault();

            addCardHandler(e.target[0].value, columnName);
            this.changeShowingFormState();
        }

        if (this.state.showingForm) {
            return <form onSubmit={formHandler} className={styles.addCardForm}>
                <textarea required={true} cols="30" rows="3" maxLength={100}/>
                <button type="submit">Add card</button>
            </form>
        } else {
            return <button className={styles.addCardButton} onClick={this.changeShowingFormState}>+ Write note</button>

        }
    }

    render() {

        const {name, backColor, cards, addCardHandler, onLike, onDislike, onChange} = this.props;
        const {showingFormHandler} = this;

        const data = cards.filter((item) => item.type === name).sort((a, b) => {return  b.likes - a.likes});

        return <div style={{backgroundColor: `#${backColor}`}} className={styles.column}>
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
    }
}

export default Column;
