import { connect } from 'react-redux'
import { setFilter } from '../actions'
import Control from '../components/Control'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.filter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setFilter(ownProps.filter))
    }
  }
}

const FilterControl = connect(
  mapStateToProps,
  mapDispatchToProps
)(Control)

export default FilterControl
