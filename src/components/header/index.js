import React, { Component } from 'react'
import HeaderContainer from './headerContainer'

class mainHeader extends Component {
    render() {
        return (
            <HeaderContainer {...this.props} />
        )
    }
}



export default mainHeader