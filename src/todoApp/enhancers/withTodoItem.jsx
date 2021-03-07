import React from 'react';

const withTodoItem = (Component) => {

    class WithTodoItem extends React.Component {

        updateCardHandler (id, cardState) {
            const body = {
                status: !cardState,
            }
            fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                body: JSON.stringify(body)
            })
                .catch(console.error)
        }

        render() {


            return <Component onStatusChange={this.updateCardHandler} {...this.props}/>
        }

    }

    return WithTodoItem;
}

export default withTodoItem;