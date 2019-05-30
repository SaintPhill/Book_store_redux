import React from 'react'
import {Menu} from "semantic-ui-react";
import {Popup, Button, List, Image} from 'semantic-ui-react'
import PropTypes from 'prop-types'

const CartList = ({title, image, id, removeBook, books}) => {
    let count = books.reduce((count, item) => count + (item.id === id ? 1 : 0), 0);

    return (
        <List selection divided verticalAlign='middle'>
            <List.Item>
                <List.Content floated='right'>
                    <Button onClick={() => removeBook(id)} color={'red'}>Удалить</Button>
                </List.Content>
                <Image avatar src={image}/>
                <List.Content>{title} <strong>{count}шт.</strong></List.Content>
            </List.Item>
        </List>
    )
};

CartList.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.number,
  removeBook: PropTypes.func.isRequired,
  books: PropTypes.array
}

const Header = ({totalPrice, count, items, removeBook, books}) => {
    const style = {
        borderRadius: 5,
        opacity: 0.9
    };

    return (
        <Menu>
            <Menu.Item>
                Магазин книг
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>
                    Итого: &nbsp; <b>{totalPrice}</b> руб.
                </Menu.Item>
                {count > 0 ?
                    <Popup
                        on='click'
                        hideOnScroll
                        trigger={<Menu.Item name='help'>Корзина (<b>{count}</b>)</Menu.Item>}
                        content={items.map((book, id) =>
                            <CartList
                                books={books}
                                {...book}
                                key={id}
                                removeBook={removeBook}/>)}
                        style={style}
                    /> :
                    <Menu.Item>Корзина (<b>{count}</b>)</Menu.Item>}

            </Menu.Menu>
        </Menu>
    )
};

Header.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  count: PropTypes.number,
  items: PropTypes.array,
  removeBook: PropTypes.func.isRequired,
  books: PropTypes.array
}



export default Header

