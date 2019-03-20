import React, { Component } from 'react'
import NoteContext from '../../contexts/NoteContext'
import NoteApiService from '../../services/note-api-service'
import { Section } from '../../components/Utils/Utils'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import './NotePage.css'

export default class NotePage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = NoteContext

  componentDidMount() {
    const { noteId } = this.props.match.params
    this.context.clearError()
    NoteApiService.getNote(noteId)
      .then(this.context.setNote)
      .catch(this.context.setError)
    NoteApiService.getNoteReviews(noteId)
      .then(this.context.setReviews)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearNote()
  }

  renderNote() {
    const { note, reviews } = this.context
    return <>
      <div className='NotePage__image' style={{backgroundImage: `url(${note.image})`}} />
      <h2>{note.title}</h2>
      <NoteContent note={note} />
      <NoteReviews reviews={reviews} />
      <ReviewForm />
    </>
  }

  render() {
    const { error, note } = this.context
    let content
    if (error) {
      content = (error.error === `Note doesn't exist`)
        ? <p className='red'>Note not found</p>
        : <p className='red'>There was an error</p>
    } else if (!note.id) {
      content = <div className='loading' />
    } else {
      content = this.renderNote()
    }
    return (
      <Section className='NotePage'>
        {content}
      </Section>
    )
  }
}

function NoteContent({ note }) {
  return (
    <p className='NotePage__content'>
      {note.content}
    </p>
  )
}

function NoteReviews({ reviews = [] }) {
  return (
    <ul className='NotePage__review-list'>
      {reviews.map(review =>
        <li key={review.id} className='NotePage__review'>
          <p className='NotePage__review-text'>
            <FontAwesomeIcon
              size='lg'
              icon='quote-left'
              className='NotePage__review-icon blue'
            />
            {review.text}
          </p>
          <p className='NotePage__review-user'>
            {review.user.full_name}
          </p>
        </li>
      )}
    </ul>
  )
}
