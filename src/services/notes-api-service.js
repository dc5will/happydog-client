// import TokenService from '../services/token-service';
import config from '../config'
import TokenService from '../services/token-service'

const NotesApiService = {
    getNotes() {
        return fetch(`${config.API_ENDPOINT}/notes`, {
                headers: {
                    'Authorization' : `Bearer ${TokenService.getAuthToken()}`
                },
            })
            .then(resp =>
                (!resp.ok) ?
                resp.json().then(e => Promise.reject(e)) :
                resp.json()
            )
    },

    getNote(noteId) {
        return fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
                headers: {
                    'Authorization' : `Bearer ${TokenService.getAuthToken()}`
                },
            })
            .then(resp =>
                (!resp.ok) ?
                resp.json().then(e => Promise.reject(e)) :
                resp.json()
            )
    },
}



export default NotesApiService;