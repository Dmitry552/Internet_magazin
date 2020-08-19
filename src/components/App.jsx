import React, { Component } from 'react';

import axios from "axios";
import { Container, Card } from 'semantic-ui-react';
import BookCard from '../conteiners/BookCard';
import Filter from '../conteiners/Filter';
import Menu from '../conteiners/Menu';

class App extends Component {
  UNSAFE_componentWillMount() {
    var { setBooks } = this.props;
    axios.get('/books.json').then(({data}) => {
      setBooks(data);
    });
  }
  render () {
    var { books, isReady } = this.props;
    return (
      <Container>
        <Menu />
        <Filter />
        <Card.Group itemsPerRow={4}>
          {!isReady ? 'Загрузка...' : books.map((book, i) => (
            <BookCard key={i} {...book}/>
          ))}
        </Card.Group>
      </Container>
    );
  }
}

export default App;
