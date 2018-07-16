import React from 'react'

import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ListComponent from "./components/list-of-books/ListComponent";
import SearchBooksComponent from "./components/search-books/SearchBooksComponent";


class BooksApp extends React.Component {


    render() {
        return (
            <Router>
                <div className="app">
                    <Route path="/" component={ListComponent} exact={true}/>
                    <Route path="/search" component={SearchBooksComponent}/>
                </div>
            </Router>
        )
    }
}

export default BooksApp
