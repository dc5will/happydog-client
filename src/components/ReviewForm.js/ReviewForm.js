import React, { Component } from 'react'
import NoteContext from '../../contexts/NoteContext'
import NoteApiService from '../../services/note-api-service'
import { Button, Textarea } from '../Utils/Utils'

export default class ReviewForm extends Component {
  static contextType = NoteContext

  handleSubmit = ev => {
    ev.preventDefault()
    const { note } = this.context
    const { text } = ev.target

    NoteApiService.postReview(note.id, text.value)
      .then(this.context.addReview)
      .then(() => {
        text.value = ''
      })
      .catch(this.context.setError)
  }

  render() {
    return (
      <form
        className='ReviewForm'
        onSubmit={this.handleSubmit}
      >
        <div className='text'>
          <Textarea
            required
            aria-label='Leave a note...'
            name='text'
            id='text'
            cols='30'
            rows='3'
            placeholder='Leave a note..'>
          </Textarea>
        </div>

        <Button type='submit'>
          Post Note
        </Button>
      </form>
    )
  }
}
