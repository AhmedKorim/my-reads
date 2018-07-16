import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ListComponent from "./components/list-of-books/ListComponent";
import SearchBooksComponent from "./components/search-books/SearchBooksComponent";
import {getAll} from "./BooksAPI";

class BooksApp extends React.Component {
    state = {
        allBooks: []
    };

    componentDidMount() {
        getAll().then(allBooks => this.setState({allBooks}));

    }

    render() {
        return (
            <Router>
                <div className="app">
                    <Route path="/" render={() => <ListComponent allBooks={this.state.allBooks}/>} exact={true}/>
                    <Route path="/search" component={SearchBooksComponent}/>
                </div>
            </Router>
        )
    }
}

export default BooksApp
