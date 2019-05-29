import BookCard from '../components/BookCard'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as cartActions from "../actions/cart";


const mapStateToProps = ({cart}, {book}) => ({
    count: cart.items.reduce((count, item) => count + (item.id === book.id ? 1 : 0), 0)
});


const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookCard)