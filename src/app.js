import Post from './post.js';
import User from './user.js';
import ui from './ui.js';


//render posts to the ui
Post.findAll()
  .then(ui.renderPosts)
  .catch( (error) => {
    console.log(error);
  });

User.findRecent()
  .then(ui.renderUsers)
  .catch( (error ) => {
    console.log( error );
  });
