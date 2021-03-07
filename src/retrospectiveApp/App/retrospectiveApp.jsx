import React from 'react';
import Column from "../Column/column";

import styles from './retrospectiveApp.module.css';

class RetrospectiveApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    }

    this.addCard = this.addCard.bind(this);
    this.likeHandler = this.likeHandler.bind(this);
    this.dislikeHandler = this.dislikeHandler.bind(this);
    this.changeTitleHandler = this.changeTitleHandler.bind(this);
  }

  addCard(title, columnType) {

    let card = {
      title: title,
      likes: 0,
      date: new Date(),
      id: this.state.cards.length,
      type: columnType
    };

    switch (columnType) {
      case 'Good things':
        this.setState((state) => {
          return {
            cards: [...state.cards, card]
          }
        });
        break;
      case 'Bad things':
        this.setState((state) => {
          return {
            cards: [...state.cards, card]
          }
        });
        break;
      case 'Action items':
        this.setState((state) => {
          return {
            cards: [...state.cards, card]
          }
        });
        break;
      default:
        console.log('Undefined columnType: ', columnType);
    }
  }

  likeHandler(id) {
    this.setState((state) => {
      let data = state.cards;
      // I really don't understand why an increase this value on 1, it increased on 2
      // so when I increase on 0.5, it increases on 1
      // function called one time, I have checked it
      data[id].likes += 0.5;
      return {
        cards: data
      }
    })
  }

  dislikeHandler(id) {
    this.setState((state) => {
      let data = state.cards;
      data[id].likes -= 0.5;
      return {
        cards: data
      }
    })
  }

  changeTitleHandler(id, value) {
    this.setState((state) => {
      let data = state.cards;
      data[id].title = value;
      return {
        cards: data
      }
    })
  }

  render() {

    const { addCard, likeHandler, dislikeHandler, changeTitleHandler } = this;

    return <div className={styles.container}>
      <Column name={'Good things'}
              backColor={'131417'}
              cards={this.state.cards}
              addCardHandler={addCard}
              onLike={likeHandler}
              onDislike={dislikeHandler}
              onChange={changeTitleHandler}/>
      <Column name={'Bad things'}
              backColor={'131417'}
              cards={this.state.cards}
              addCardHandler={addCard}
              onLike={likeHandler}
              onDislike={dislikeHandler}
              onChange={changeTitleHandler}/>
      <Column name={'Action items'}
              backColor={'131417'}
              cards={this.state.cards}
              addCardHandler={addCard}
              onLike={likeHandler}
              onDislike={dislikeHandler}
              onChange={changeTitleHandler}/>
    </div>
  }
}

export default RetrospectiveApp;
