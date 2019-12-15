import { connect } from 'react-redux'
import Total from '../components/Total'

const mapStateToProps = (state) => {
    return {
        UrgentCares: state.UrgentCares
    }
}

export default connect(mapStateToProps)(Total)