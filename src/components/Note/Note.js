import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Note extends Component {
    render() {
        return (
            <div>
                <Link to={`/my-notes/${this.props.note.id}`}>
                    <ul>{this.props.note.name}</ul>
                </Link>
            </div>
        )
    }
}