import React, { Component } from 'react'

export default class Wrapper extends Component {

    render() {
        return (
            <div>
                <p>Інтервал вже працює: {this.props.seconds}</p>
            </div>
        )
    }
}
