import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Card} from "semantic-ui-react";
import {Container} from "semantic-ui-react";
import BookCard from "../containers/BookCard";
import Header from "../containers/Header";
import './App.css'
import Filter from "../containers/Filter";
import PropTypes from 'prop-types'

class App extends React.Component {
    componentWillMount() {
        const {setBooks} = this.props;
        fetch('/books.json')
            .then(res => res.json())
            .then(json => setBooks(json))
            .catch(error => console.log(error.message))
    }

    render() {
        const {books, isReady} = this.props;
        return (
            <Container>
                <Header/>
                <Filter/>
                <Card.Group itemsPerRow={4}>
                    {!isReady
                        ? 'Загрузка'
                        : books.map(book => (
                            <BookCard book={book} key={book.id}/>
                        ))}
                </Card.Group>
            </Container>
        );
    }
}
App.propTypes = {
    setBooks: PropTypes.func.isRequired,
    books: PropTypes.array,
    isReady: PropTypes.bool.isRequired
};

export default App;
