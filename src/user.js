import API from './api.js';
let User = {
  findRecent(){ return API.fetch("activeUsers"); }
}
export default User;
