import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filterActions from '../actions/filter';
import Filter from '../components/Filter';

var mapStateToProps = ({ books, filter }) => ({
  filterBy: filter.filterBy,
});

var mapDispatchToProps = dispatch => ({
  ...bindActionCreators(filterActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);