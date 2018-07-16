import React from 'react';
import {Link} from "react-router-dom";
import Book from "./BookComponent";
import {getAll} from "../../BooksAPI";

class ListComponent extends React.Component {
    state = {
        allBooks: []
    };

    componentDidMount() {
        getAll().then(allBooks => this.setState({allBooks}));

    }

    static bookShelves = [{
        name: 'Currently Reading'
        , shelfTitle: "currentlyReading"
    }
        , {
            name: 'Want To Read'
            , shelfTitle: "wantToRead"
        }, {
            name: 'Read'
            , shelfTitle: "read"
        }];

    render() {
        return (

            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {ListComponent.bookShelves.map((bookShelf, index) => (
                            <div className="bookshelf" key={index}>
                                <h2 className="bookshelf-title">{bookShelf.name}</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {this.state.allBooks
                                            .filter(book => book.shelf === bookShelf.shelfTitle)
                                            .map((bookData ,index) => (
                                            <li key={index}>
                                                    <Book bookData={bookData}/>
                                                </li>))}
                                    </ol>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link to={'/search'}>add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListComponent;