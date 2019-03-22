import TokenService from '../services/token-service';
import config from '../config'

const NotesApiService = {

    getAllNotes() {
        return fetch(`${config.API_ENDPOINT}/all`, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${TokenService.getAuthToken()}`
                }
            })
            .then(res =>
                !res.ok ? res.json()
                .then(e => Promise.reject(e)) : res.json()
            );
    },
    getNoteById(id) {
        return fetch(`${config.API_ENDPOINT}/${id}`, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${TokenService.getAuthToken()}`
                }
            })
            .then(res =>
                !res.ok ? res.json()
                .then(e => Promise.reject(e)) : res.json()
            );
    },
    deleteNote(id) {
        return fetch(`${config.API_ENDPOINT}/${id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${TokenService.getAuthToken()}`
                }
            })
            .then(res =>
                !res.ok ? res.json()
                .then(e => Promise.reject(e)) : res.json()
            );
    },
    postNote(newNote) {
        return fetch(`${config.API_ENDPOINT}/newnote`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${TokenService.getAuthToken()}`
                },
                body: newNote
            })
            .then(res =>
                !res.ok ? res.json()
                .then(e => Promise.reject(e)) : res.json()
            );
    },

}

export default NotesApiService;