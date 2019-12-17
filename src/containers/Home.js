// import { connect } from 'react-redux'
// import Home from '../components/Home'

// const mapStateToProps = (state) => {
//   return {
//     UrgentCares : state.UrgentCares
//   }
// }

// export default connect(mapStateToProps)(Home)
import { connect } from "react-redux"
import Home from "../components/Home"
import {  deleteUrgentCare} from '../Redux/actions'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    urgentcares: state.uegentcares
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUrgentCare: (index) => dispatch(deleteUrgentCare(index))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)