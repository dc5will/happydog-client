import React, { Component } from 'react'
import NoteContext from '../../contexts/NoteContext'
import NoteApiService from '../../services/note-api-service'
import { Section } from '../../components/Utils/Utils'

function NoteContent({ note }) {
  return (
    <p className='NotePage_content'>
      {note.content}
    </p>
  )
}

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
    const { note } = this.context
    return <>
      <div className='NotePage__image' style={{backgroundImage: `url(${note.image})`}} />
      <h2>{note.title}</h2>
      <NoteContent note={note} />
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



