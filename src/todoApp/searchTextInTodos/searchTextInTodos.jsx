import React from 'react';

const SearchTextInTodos = ({setSearchKeywords}) => {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            setSearchKeywords(e.target[0].value)
        }}>
            <input type="text" onChange={(e) => setSearchKeywords(e.target.value)} placeholder={'Search todo'}/>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchTextInTodos;