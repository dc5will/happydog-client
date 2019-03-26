import TokenService from "../services/token-service";
import config from "../config";

const NotesApiService = {
  getAllNotes() {
    return fetch(`${config.API_ENDPOINT}/my-notes`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(TokenService.getAuthToken)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  postNote(name) {
    return fetch(`${config.API_ENDPOINT}/add-note`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        name: name
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  deleteNote(noteId) {
    return fetch(`${config.API_ENDPOINT}/my-notes`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        noteId: noteId
      })
    }).then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : null));
  },

  postNewComment(noteId, comment, dueDate) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: "POST",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        noteId,
        comment,
        dueDate
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  deleteComment(id) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        id
      })
    }).then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : null));
  },

  getComments(noteId) {
    return fetch(`${config.API_ENDPOINT}/comments/${noteId}`, {
      method: "GET",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  // grab specific user for welcome
  // getUserName() {
  //   return fetch(`${config.API_ENDPOINT}/users`, {
  //     method: "GET",
  //     headers: {
  //       authorization: `bearer ${TokenService.getAuthToken()}`,
  //       "content-type": "application/json"
  //     }
  //   }).then(res =>
  //     !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
  //   );
  // },
  

};

export default NotesApiService;
