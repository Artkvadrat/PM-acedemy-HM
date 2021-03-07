import React from 'react';
import TodoItemsList from "../todoItemsList/todoItemsList";
import SearchTextInTodos from "../searchTextInTodos/searchTextInTodos";

import styles from './todoApp.module.css';

class TodoApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userList: [],
            todos: [],
            selectedUser: 1,
            searchKeywords: '',
        };

        this.titleInputRef = React.createRef();

        this.setUserList = this.setUserList.bind(this);
        this.getUserTodos = this.getUserTodos.bind(this);
        this.changeStatusInState = this.changeStatusInState.bind(this);
        this.addTodoItem = this.addTodoItem.bind(this);
        this.setSearchKeywords = this.setSearchKeywords.bind(this);
    }

    setUserList (userList) {
        let result = [];

        userList.map( ({id, name, username}) => {
            return result.push({id, name, username});
        });

        this.setState(() => {
            return {
                userList: result,
            }
        })
    }

    getUserTodos (id) {
        fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
            .then( (response) => response.json() )
            .then( (data) =>  this.setState( (state) => {
                return {
                    todos: data,
                }
            }));
    }

    setSearchKeywords (value) {
        this.setState(() => {
            return {
                searchKeywords: value,
            }
        })
    }

    onSelectChange (e) {
        this.setState( () => {
            return {
                selectedUser: e.target.value,
            }
        } );
        this.getUserTodos(e.target.value);
    }

    changeStatusInState (id) {
        this.setState((state) => {
            let newTodos = [...state.todos];
            let elementIndex = newTodos.findIndex((element) => element.id === id);
            newTodos[elementIndex] = {...state.todos[elementIndex], completed: !newTodos[elementIndex].completed}
            return {
                todos: [...newTodos]
            }
        })
    }

    addTodoItem (e) {
        e.preventDefault();

        const title = e.target[0].value;

        const body = {
            title: title,
            completed: false,
            userId: this.state.selectedUser,
        }
        fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify(body),
        })
            .catch(console.error);

        this.setState( (state) => {
            const newTodo = {
                userId: Number(this.state.selectedUser),
                id: this.state.todos[this.state.todos.length-1].id + 1,
                title: title,
                completed: false,
            };
            return {
                todos: [...state.todos, newTodo]
            }
        });

        e.target[0].value = '';
        this.titleInputRef.current.focus();
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( (response) => response.json() )
            .then( (data) => this.setUserList(data) )
    }

    componentDidUpdate( prevProps, prevState) {
        if (prevState.userList !== this.state.userList) {
            this.setState((state) => {
                return {
                    selectedUser: state.userList[0].id,
                }
            })
            this.getUserTodos(this.state.selectedUser);
        }
    }

    render() {

        const { userList, todos, searchKeywords } = this.state;

        return (
            <React.Fragment>
                <div className={styles.todoHeader}>
                    <select name="users" id="users" onChange={ (event) => this.onSelectChange(event) }>
                        {userList.map( item => {
                            return <option value={item.id} key={item.id}>{item.name}</option>
                        })}
                    </select>

                    <form onSubmit={this.addTodoItem}>
                        <input type="text" ref={this.titleInputRef} required placeholder='Type new todo here'/>
                        <button type='submit'>Add</button>
                    </form>

                    <SearchTextInTodos setSearchKeywords={this.setSearchKeywords}/>
                </div>

                <TodoItemsList todosArray={todos} changeHandler={this.changeStatusInState} searchValue={searchKeywords}/>

            </React.Fragment>

        )
    }
}

export default TodoApp;