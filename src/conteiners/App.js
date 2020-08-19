import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../actions/books';
import App from '../components/App';
import orderBy from 'lodash/orderBy';

var sortBy = (books, filterBy) => {
  switch (filterBy) {
    case 'price_high':
      return orderBy(books, 'price', 'desc');
    case 'price_low':
      return orderBy(books, 'price', 'asc');
    case 'author':
      return orderBy(books, 'author', 'asc');
    default:
      return books;
  }
};

const filterBooks = (books, serchQuery) => {
  return (books.filter(
    e => 
        e.title.toLowerCase().indexOf(serchQuery.toLowerCase()) >= 0 || 
        e.author.toLowerCase().indexOf(serchQuery.toLowerCase()) >= 0)
      );
};

var searchBooks = (books, filterBy, serchQuery) => {
  return sortBy(filterBooks(books, serchQuery), filterBy);
};

var mapStateToProps = ({ books, filter }) => ({
  books: 
    books.items && 
    searchBooks(books.items, filter.filterBy, filter.serchQuery),
  isReady: books.isReady
});

var mapDispatchToProps = dispatch => ({
  ...bindActionCreators(booksActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);