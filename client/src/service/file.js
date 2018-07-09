import axios from "axios/index";

export function getFile() {
  return axios.get('/data.json')
}
