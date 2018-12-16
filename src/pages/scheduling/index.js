import React, { Component } from 'react'
import SchedulingContainer from './containers/shedulingContainer'
import Header from '../../components/header/headerComponent'

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <SchedulingContainer {...this.props} />
            </div>

        )
    }
}

export default Main