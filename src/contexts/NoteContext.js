import React, { Component } from 'react'

export const nullnote = {
  author: {},
  tags: [],
}

const NoteContext = React.createContext({
  note: nullnote,
  reviews: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setnote: () => {},
  clearnote: () => {},
  setReviews: () => {},
  addReview: () => {},
})

export default NoteContext

export class NoteProvider extends Component {
  state = {
    note: nullnote,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setnote = note => {
    this.setState({ note })
  }

  setReviews = reviews => {
    this.setState({ reviews })
  }

  clearnote = () => {
    this.setnote(nullnote)
    this.setReviews([])
  }

  addReview = review => {
    this.setReviews([
      ...this.state.reviews,
      review
    ])
  }

  render() {
    const value = {
      note: this.state.note,
      reviews: this.state.reviews,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setnote: this.setnote,
      setReviews: this.setReviews,
      clearnote: this.clearnote,
      addReview: this.addReview,
    }
    return (
      <NoteContext.Provider value={value}>
        {this.props.children}
      </NoteContext.Provider>
    )
  }
}
