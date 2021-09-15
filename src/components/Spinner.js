import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <div class="spinner-border text-warning" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}

export default Spinner
