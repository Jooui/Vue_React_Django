import axios from "axios";
import store from "@/store";


export default function createHttp(secured = true) {
  // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  if (secured) {
    return axios.create({
      headers: { "Authorization": `Token ${store.state.token}` }
    });
  } else {
    return axios.create();
  }
}