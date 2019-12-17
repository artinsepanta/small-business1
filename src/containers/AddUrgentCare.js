import { connect } from 'react-redux'
import AddUrgentCare from '../components/AddUrgentCare'
import { addUrgentCare} from '../Redux/actions'


const mapDispatchToProps = (dispatch) => {
    return {
        addUrgentCare: (UrgentCare) => dispatch(addUrgentCare(UrgentCare))
    }
}

export default connect(null, mapDispatchToProps)(AddUrgentCare)