import { connect } from 'react-redux'
import UrgentCare from '../components/UrgentCare'

const mapStateToProps = (state) => {
    return {
      UrgentCares: state.UrgentCare
    }
}

export default connect(mapStateToProps)(UrgentCare)