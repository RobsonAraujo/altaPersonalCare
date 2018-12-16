import { connect } from 'react-redux'
import Header from './headerComponent'


const mapStateToProps = state => {
    return {
        teste: null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        teste: () => {
            dispatch(null /*user here your action*/)
        }
    }
}


const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)

export default HeaderContainer