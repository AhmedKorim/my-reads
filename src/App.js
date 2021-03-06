import React from 'react'

import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ListComponent from "./components/list-of-books/ListComponent";
import SearchBooksComponent from "./components/search-books/SearchBooksComponent";
import {getAll, update} from "./BooksAPI";


class BooksApp extends React.Component {
    state = {
        allBooks: []
    };
    fetchAll = () => {
        getAll().then(allBooks => this.setState({allBooks}));
    };


    componentDidMount() {
        this.fetchAll();

    }

    updateData = (newBook, newShelf) => {
        update(newBook, newShelf).then(res => console.log(res));
        console.log('updated');
        this.setState(prevState => (
            {
                allBooks: prevState.allBooks.map(book => {
                    if (book.id === newBook.id) book.shelf = newShelf;
                    return book;
                })
            }
        ));
    };


    render() {
        return (
            <Router>
                <div className="app">
                    <Route path="/" render={() => <ListComponent allBooks={this.state.allBooks} fetch={this.fetchAll} updateData={this.updateData}/>}
                           exact={true}/>
                    <Route path="/search"
                           render={() => <SearchBooksComponent allBooks={this.state.allBooks} updateData={this.updateData}/>}/>
                </div>
            </Router>
        )
    }
}

export default BooksApp
