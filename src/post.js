import API from './api.js';
let Post = {
  findAll(){ return API.fetch("posts"); }
}
export default Post;
