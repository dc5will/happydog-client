import React, { Component} from 'react';

const NotesContext = React.createContext({
    notes: [],
    folders: [],
})
export default NotesContext


export class NotesContextProvider extends Component {
    state = { 
        folders: [],
        notes: [],
        handleDeleteNote: () => {},
        handleDeleteFolder: () => {},
        handleUpdateFolder: () => {},
        addFolder: () => {},
        addNote: () => {},
    }

    handleDeleteNote = (noteId) => {
        this.setState({
            notes: this.state.notes.filter(note => note.id !== noteId)
        });
    }

    handleDeleteFolder = (folderId) => {
        this.setState({
            folders: this.state.folders.filter(folder => folder.id !== folderId),
            notes: this.state.notes.filter(note => note.folder_id !== folderId)
        });
    }

    handleUpdateFolder = (updatedFolder) => {
        console.log(updatedFolder, this.state.folders);
        this.setState({
            folders: this.state.folders.map(folder => {
                return (folder.id !== updatedFolder.id) ? folder : updatedFolder;
            })
        });
    }

    addFolder = (folder) => {
        const folders = [...this.state.folders, folder]
        this.setState({
            folders
        })
    }

    addNote = (note) => {
        const notes = [...this.state.notes, note]
        this.setState({
            notes
        })
    }

    render() {
            const value = {
                handleDeleteNote: this.state.handleDeleteNote,
                handleDeleteFolder: this.state.handleDeleteFolder,
                addFolder: this.state.addFolder,
                addNote: this.state.addNote,
                handleUpdateFolder: this.state.handleUpdateFolder
            }
            return (
                <NotesContext.Provider value={value}>
                    {this.props.children}
                </NotesContext.Provider>
            )
          }
      }
