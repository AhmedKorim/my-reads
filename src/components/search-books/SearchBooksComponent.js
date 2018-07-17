import React from 'react';
import {Link} from "react-router-dom";
import {search} from "./../../BooksAPI";
import Book from "../list-of-books/BookComponent";

class SearchBooksComponent extends React.Component {
    state = {
        query: '',
        searchResults: [],
    };
    search = (value) => {
        this.setState({query: value});
        search(this.state.query).then(res => (
            res.error ?   this.setState({searchResults: []}) : this.setState({searchResults: res.map(book => {book.shelf='none'; return book})})
        )).catch(error => console.log(error))
    };
    componentDidMount(){
        console.log(this.searchInput);
        this.searchInput.focus()
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                               value={this.state.query}
                               aria-label="search for a book enter author name or book title"
                               ref={(input) => this.searchInput=input}
                               onChange={event => this.search(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchResults &&
                        this.state.searchResults.length> 0 ? this.state.searchResults.map((bookData, index) =>
                            (<li key={index}> <Book bookData={bookData} updateData={this.props.updateData} /></li>)) :
                            ( <li> {this.state.query === '' ? 'Enter author name or book title to show the result books here' : `Sorry your search ${this.state.query.toUpperCase()} is not available`} </li>)}
                    </ol>
                </div>
            </div>

        )
    }
}

export default SearchBooksComponent;