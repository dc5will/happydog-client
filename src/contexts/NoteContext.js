import React, { Component } from 'react'


const NoteContext = React.createContext({
  note: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setNote: () => {},
})

export default NoteContext

export class NoteProvider extends Component {
  state = {
    note: [],
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setNote = note => {
    this.setState({ note })
  }


  render() {
    const value = {
      note: this.state.note,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setNote: this.setNote,
    }
    return (
      <NoteContext.Provider value={value}>
        {this.props.children}
      </NoteContext.Provider>
    )
  }
}
