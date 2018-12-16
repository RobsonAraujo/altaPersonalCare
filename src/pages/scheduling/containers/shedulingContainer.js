import { connect } from 'react-redux'
import SchedulingComponent from '../components/schedulingComponent'


const mapStateToProps = state => {
    return {
        state: `hhj`
    }
}


const mapDispatchToProps = dispatch => {
    return {

    }
}


export default  connect(mapStateToProps, mapDispatchToProps)(SchedulingComponent)