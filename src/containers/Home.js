import { connect } from 'react-redux'
import Home from '../components/Home'

const mapStateToProps = (state) => {
  return {
    UrgentCares : state.UrgentCare
  }
}

export default connect(mapStateToProps)(Home)