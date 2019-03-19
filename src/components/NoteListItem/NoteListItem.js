import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function truncate(text) {
    const words = text.split(' ')

    if (words.length > 10) {
        return words.slice(0, 10).join(' ') + ' ...'
    }
    return text
}


export default class NoteListItem extends Component {
    
  render() {
    const { note } = this.props

    return (
      <Link to={`/note/${note.id}`} className='noteListItem'>
        <div className='noteListItem__details'>
          <div className='noteListItem__text'>
            <h2 className='noteListItem__heading'>{note.title}</h2>
            <p className='noteListItem__description'>{truncate(note.content)}</p>
          </div>
        </div>
      </Link>
    )
  }
}