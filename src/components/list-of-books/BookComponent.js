import React from 'react';

class Book extends React.Component {

    state = {
        shelf: ''
    }
    shelfChange = (newShelf = this.props.bookData.shelf) => {
        newShelf && this.setState({shelf: newShelf});
        this.props.updateData();
        this.props.updateData();
    };

    componentDidMount() {
        this.shelfChange();
    }

    render() {
        const {bookData} = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        background: `url("${bookData.imageLinks ? bookData.imageLinks.thumbnail : `//via.placeholder.com/300/E8117F/fff?text=${bookData.title}`}") center center no-repeat`,
                        backgroundSize: 'cover'
                    }}></div>
                    <div className="book-shelf-changer">
                        <select
                            aria-label={`select shelf for ${bookData.title}`}
                            onChange={e => this.shelfChange(e.target.value)}
                            value={this.state.shelf}
                        >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{bookData.title}</div>
                {bookData.author &&
                <div className="book-authors">{bookData.authors.map((author) => (<span key={author}> {author} </span>))}</div>
                }
            </div>
        )
    }

}

export default Book;
