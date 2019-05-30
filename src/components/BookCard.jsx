import React from 'react'
import {Card, Icon, Image, Button} from 'semantic-ui-react'
import PropTypes from "prop-types";

const BookCard = (props) => {
    let {title, author, price, image} = props.book;
    let {addBook, count} = props;

    return (
        <Card>
            <Image src={image}/>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span>{author}</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <a href='/#'>
                    <Icon name='rub'/>
                    {price}
                </a>
            </Card.Content>
            <Button onClick={() => addBook(props.book)}>Добавить в корзину {count > 0 && `(${count})`}</Button>
        </Card>
    )
};

BookCard.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    addBook: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
}

export default BookCard