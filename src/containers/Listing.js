import { connect } from 'react-redux'
import Listing from '../components/Listing'
import { removeUrgentCare } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        UrgentCares : state.UrgentCares
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeUrgentCare: (index) => dispatch(removeUrgentCare(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listing)