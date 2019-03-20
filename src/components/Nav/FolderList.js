import React from 'react';
import Folder from '../Folder/Folder';
import AppContext from '../../contexts/AppContext';
import { Link } from 'react-router-dom';
import config from '../../config';
import FolderUpdateForm from '../../components/Folder/FolderUpdateForm';

class FolderList extends React.Component {
  static contextType = AppContext;

  state = {
    updatingId: null,
  };


  handleDeleteFolder = (folderId) => {
    fetch(`${config.API_ENDPOINT}folders/${folderId}/`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(resp => {
        if (!resp.ok) {
          throw new Error('Something went wrong!')
        }
      })
      .then(() => {
        if (this.props.history) {
          this.props.history.push('/homepage')
        }
        this.context.handleDeleteFolder(folderId);
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  handleUpdateFolder = (folderId, updatedFolderName) => {
    const newFolder = { folder_name: updatedFolderName }
    fetch(`${config.API_ENDPOINT}folders/${folderId}/`, {
      method: 'PATCH',
      body: JSON.stringify(newFolder),
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error));
        }
      })
      .then(() => {
        this.context.handleUpdateFolder({id: folderId, folder_name: updatedFolderName});
        this.showUpdateFolderForm(null);
      })
      .catch(error => {
        console.log('Something went wrong with the server');
      });
  }

  showUpdateFolderForm = (folderId) => {
    this.setState({ updatingId: folderId });
  }

  getJsxFolders = (folders) => {
    return folders.map((folder) => {
      return (
        <React.Fragment key={folder.id}>
          {folder.id !== this.state.updatingId ? 
            <Folder folder={folder} handleDeleteFolder={this.handleDeleteFolder} showUpdateFolderForm={this.showUpdateFolderForm}/>
            :
            <FolderUpdateForm folder={folder} disableUpdateButton={this.disableUpdateButton} showUpdateFolderForm={this.showUpdateFolderForm} handleUpdateFolder={this.handleUpdateFolder}/>
          }
        </React.Fragment>
      );
    });
  }

  render() {
    const { folders = [] } = this.context;
    return (
      <>
        <ul>
          {this.getJsxFolders(folders)}
        </ul>
        <Link to="/addfolder">
          <button id="AddFolder">Add Folder</button>
        </Link>

      </>
    );
  }
}


export default FolderList;
