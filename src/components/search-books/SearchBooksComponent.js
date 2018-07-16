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
            res.error ?   this.setState({searchResults: []}) : this.setState({searchResults: res})
        )).catch(error => console.log(error))
    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                               value={this.state.query}
                               onChange={event => this.search(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {console.log(this.state.searchResults)}

                        {this.state.searchResults && this.state.searchResults.map((bookData, index) =>
                            (<li key={index}><Book bookData={bookData}/></li>))}
                    </ol>
                </div>
            </div>

        )
    }
}

export default SearchBooksComponent;