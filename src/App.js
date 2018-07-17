import React from 'react'

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
        this.updateData();

    }
    updateData = () => {
        getAll().then(allBooks => this.setState({allBooks}));
    }
    render() {
        return (
            <Router>
                <div className="app">
                    <Route path="/" render={()=><ListComponent allBooks={this.state.allBooks} updateData={this.updateData}/>} exact={true}/>
                    <Route path="/search" render={()=><SearchBooksComponent updateData={this.updateData}/>}/>
                </div>
            </Router>
        )
    }
}

export default BooksApp
