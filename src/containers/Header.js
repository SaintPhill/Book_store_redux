import Menu from '../components/Header'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as cartActions from "../actions/cart";
import uniqBy from 'lodash/uniqBy'

const mapStateToProps = ({cart}) => ({
    totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
    count: cart.items.length,
    items: uniqBy(cart.items, book => book.id),
    books: cart.items
});


const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu)