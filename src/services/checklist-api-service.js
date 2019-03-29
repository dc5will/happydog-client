import TokenService from "../services/token-service";
import config from "../config";

//TODO: POST and GET
const ChecklistApiService = {
  postChecked(value) {
    return fetch(`${config.API_ENDPOINT}/checklist`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        value
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getAllChecked() {
    return fetch(`${config.API_ENDPOINT}/checklist`, {
      method: "GET",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default ChecklistApiService;
