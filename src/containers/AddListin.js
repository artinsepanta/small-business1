import { connect } from 'react-redux'
import AddListing from '../components/AddListing'
import { addListing} from '../redux/actions'


const mapDispatchToProps = (dispatch) => {
    return {
        addListing: (UrgentCare) => dispatch(addListing(UrgentCare))
    }
}

export default connect(null, mapDispatchToProps)(AddListing)