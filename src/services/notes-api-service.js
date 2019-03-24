import TokenService from '../services/token-service';
import config from '../config'

const NotesApiService = {

    getAllNotes(){
        return fetch(`${config.API_ENDPOINT}/my-notes`, {
          headers: {
            'authorization': `bearer ${TokenService.getAuthToken()}`
          },
          body: JSON.stringify(TokenService.getAuthToken)
        })
        .then(res => !res.ok
          ? res.json().then(e => Promise.reject(e))
          : res.json()
          ) 
      },

    postNote(name) {
        return fetch(`${config.API_ENDPOINT}/add-note`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                name: name
            })
        })
        .then(res => !res.ok ?
            res.json().then(e => Promise.reject(e)) : res.json()
        )
    }, 





    // getAllNotes() {
    //     return fetch(`${config.API_ENDPOINT}/folders`, {
    //             method: "GET",
    //             headers: {
    //                 "content-type": "application/json",
    //                 authorization: `bearer ${TokenService.getAuthToken()}`
    //             }
    //         })
    //         .then(res =>
    //             (!res.ok) ? res.json()
    //             .then(e => Promise.reject(e)) : res.json()
    //         );
    // },
    // getNoteById(id) {
    //     return fetch(`${config.API_ENDPOINT}/${id}`, {
    //             method: "GET",
    //             headers: {
    //                 "content-type": "application/json",
    //                 authorization: `bearer ${TokenService.getAuthToken()}`
    //             }
    //         })
    //         .then(res =>
    //             (!res.ok) ? res.json()
    //             .then(e => Promise.reject(e)) : res.json()
    //         );
    // },
    // deleteNote(id) {
    //     return fetch(`${config.API_ENDPOINT}/${id}`, {
    //             method: "DELETE",
    //             headers: {
    //                 "content-type": "application/json",
    //                 authorization: `bearer ${TokenService.getAuthToken()}`
    //             }
    //         })
    //         .then(res =>
    //             (!res.ok) ? res.json()
    //             .then(e => Promise.reject(e)) : res.json()
    //         );
    // },
    // postNote (folder_name){
    //     return fetch(`${config.API_ENDPOINT}/addfolder`, {
    //       method: 'POST',
    //       headers: {
    //         'authorization': `bearer ${TokenService.getAuthToken()}`,
    //         'content-type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         folder_name: folder_name
    //       }),
    //     })
    //     .then( res => 
    //       (!res.ok)
    //         ? res.json().then(e => Promise.reject(e))
    //         : res.json()
    //       )
    //   },
    // postNote(folder_name) {
    //     return fetch(`${config.API_ENDPOINT}/addfolder`, {
    //             method: "POST",
    //             headers: {
    //                 "content-type": "application/json",
    //                 authorization: `bearer ${TokenService.getAuthToken()}`
    //             },
    //             body: JSON.stringify({folder_name}),
    //         })
    //         .then(res =>
    //             (!res.ok) ? res.json()
    //             .then(e => Promise.reject(e)) : res.json()
    //         );
    // },
    // updateNote(id, newNote) {
    //     return fetch(`${config.API_ENDPOINT}/${id}`, {
    //             method: "PATCH",
    //             headers: {
    //                 "content-type": "application/json",
    //                 authorization: `bearer ${TokenService.getAuthToken()}`
    //             },
    //             body: newNote
    //         })
    //         .then(res =>
    //             (!res.ok) ? res.json()
    //             .then(e => Promise.reject(e)) : res.json()
    //         );
    // },

}

export default NotesApiService;