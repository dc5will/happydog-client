import React from 'react';
import { Link } from 'react-router-dom';
import './Folder.css';

function Folder(props) {
  const folderId = props.folder.id;
  return (
    <li>
      <Link to={`/folder/${folderId}`} className="folderContainer">{props.folder.folder_name}</Link>
      {/* <button className="updateButton" onClick={() => props.showUpdateFolderForm(folderId)}>edit</button> */}
      <button className="deleteButton" onClick={() => props.handleDeleteFolder(folderId)}>x</button>
    </li>
    
  );
} 

Folder.defaultProps = {
  folder: {},
};

export default Folder;