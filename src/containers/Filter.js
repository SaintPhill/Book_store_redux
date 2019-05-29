import Filter from '../components/Filter'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as filterActions from "../actions/filter";


const mapStateToProps = ({filter}) => ({
    filter: filter.filterBy,
    searchQuery: filter.searchQuery
});


const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter)