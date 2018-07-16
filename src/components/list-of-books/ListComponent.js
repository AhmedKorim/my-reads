import React from 'react';
import {Link} from "react-router-dom";
import Book from "./BookComponent";

class ListComponent extends React.Component {
    componentDidMount(){
    }
    static bookShelfes =['Currently Reading','Currently Reading','Read']
    render() {
        return (
        <div className="list-books">

            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {ListComponent.bookShelfes.map((bookshelf, index) =>(
                        <div className="bookshelf" key={index}>
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {console.log(this.props.allBooks)}
                                    {this.props.allBooks.map((book, index) => (

                                        <li key={index}>
                                            <Book book={book}/>
                                        </li>
                                    ))}
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
        ) }
}
export default ListComponent;