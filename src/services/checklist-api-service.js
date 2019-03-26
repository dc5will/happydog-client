import TokenService from "../services/token-service";
import config from "../config";

//TODO: POST and GET
const ChecklistApiService = {
  postChecked(checked) {
    return fetch(`${config.API_ENDPOINT}/checklist`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        checked
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  
};

export default ChecklistApiService;
