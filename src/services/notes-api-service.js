// import TokenService from '../services/token-service';
import config from '../config'

const NotesApiService = {
    getNotes() {
        return fetch(`${config.API_ENDPOINT}/notes`, {
                headers: {},
            })
            .then(resp =>
                (!resp.ok) ?
                resp.json().then(e => Promise.reject(e)) :
                resp.json()
            )
    },

    getNote(noteId) {
        return fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
                headers: {},
            })
            .then(resp =>
                (!resp.ok) ?
                resp.json().then(e => Promise.reject(e)) :
                resp.json()
            )
    },
}



export default NotesApiService;