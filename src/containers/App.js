import App from '../components/App'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as booksActions from "../actions/books";
import orderBy from 'lodash/orderBy'

const sortBy = (books, filter, searchQuery) => {
    let filteredBooks = books.filter(book =>
        book.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1 ||
        book.author.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1);

    switch (filter) {
        case 'price_high':
            return orderBy(filteredBooks, ['price'], 'desc');
        case 'price_low':
            return orderBy(filteredBooks, ['price'], 'asc');
        case 'author':
            return orderBy(filteredBooks, ['author']);
        default:
            return filteredBooks
    }
};

const mapStateToProps = ({books, filter}) => ({
    books: books.items && sortBy(books.items, filter.filterBy, filter.searchQuery),
    isReady: books.isReady,
});


const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App)