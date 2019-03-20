import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import NoteList from '../Main/NoteList/NoteList';
import NoteId from '../Main/NoteId/NoteId';
import FolderList from '../Nav/FolderList';
import NoteNav from '../Nav/NoteNav';
import AppContext from '../../contexts/AppContext';
import AddFolder from '../Main/AddFolder/AddFolder';
import AddNote from '../Main/AddNote/AddNote';
import config from '../../config';

export default class NoteFolder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      folders: [], notes: [], 
      error: null,
    }
  }

  componentDidMount() {
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    }
    Promise.all([
      fetch(`${config.API_ENDPOINT}/folders`, options),
      fetch(`${config.API_ENDPOINT}/notes`, options)
    ])
    .then( ([foldersResp, notesResp]) => {
      if (!foldersResp.ok) {
        return foldersResp.json().then(event => Promise.reject(event));
      }
      if (!notesResp.ok) {
        return notesResp.json().then(event => Promise.reject(event));
      }
      return Promise.all([
        foldersResp.json(),
        notesResp.json()
      ])
    })
    .then(([foldersJson, notesJson]) => {
      this.setState({folders: foldersJson, notes: notesJson, loading: false});
    })
    .catch(error => {
      this.setState({error: error.message});
    });
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

  getMainRoutes = () => {
    return (<Switch>
      <Route
        exact path="/homepage"
        component={NoteList}
      />
      <Route
        path="homepage/folder/:folderId"
        component={NoteList}
      />
      <Route
        path="homepage/note/:noteId"
        component={NoteId}
      />
      <Route
        path="homepage/AddNote"
        component={AddNote}
      />
      <Route
        path="homepage/AddFolder"
        component={AddFolder}
      />
      <Route render={() => <div>Something went wrong!</div>} />
    </Switch>);
  }

  renderMainComponent = () => {
    return (
      <>
        {this.getMainRoutes()}
      </>
    );
  }

  renderNavigationComponent = () => {
    return (
      <>
        {<Switch>
          <Route 
            path="homepage/note/:noteId"
            component={NoteNav}
          />
          <Route 
            path="homepage/folder/:folderId"
            component={FolderList}
          />
          <Route 
            exact path="/homepage"
            component={FolderList}
          />
          <Route
            path="homepage/AddFolder"
            component={NoteNav}
          />
          <Route
            path="homepage/AddNote"
            component={NoteNav}
          />
          <Route component={NoteNav}/>
        </Switch>}
      </>
    );
  }

  render() {
    return (
      <AppContext.Provider value= {
        {...this.state,
            handleDeleteNote: this.handleDeleteNote, 
            handleDeleteFolder: this.handleDeleteFolder,
            addFolder: this.addFolder, 
            addNote: this.addNote,
            handleUpdateFolder: this.handleUpdateFolder
        }}>
          <section>
            {this.renderNavigationComponent()}
          </section>
          {/* <section>
            {this.renderMainComponent()}
          </section> */}
      </AppContext.Provider>
    );
  }
}

