import { connect } from 'react-redux'
import GoogleMap from '../components/GoogleMap'

const mapStateToProps = (state) => {
    return {
        UrgentCares: state.UrgentCares
    }
}

export default connect(mapStateToProps)(GoogleMap)