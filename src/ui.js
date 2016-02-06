import xss from 'xss-filters';
let ui = {
  renderPosts(posts){
      //iterate through each post and each post willreturn an article template and assign final array to elements
    let elements = posts.map( (post) => {
      //object destructuring... same as var title = post.title; & var lastReply = post.lastReply
    let { title, lastReply } = post;
      //calling the functionpassing in the title of each post and last reply for each post
        return articleTemplate(title, lastReply);
    });

    let target = document.querySelector('.container');
    target.innerHTML = elements.join("");
  },
  renderUsers(users) {
    let elements = users.map( (user) => {
    let {name, avatar} = user;
      return userTemplate(name, avatar);
    });

    let target = document.querySelector('.sidebar-content');
    target.innerHTML = elements.join("");
  }
}

function userTemplate(name, avatar) {
  let safeName = xss.inHTMLData(name);
  let safeAvatar = xss.inHTMLData(avatar);
  let template = `
                  <div class="active-avatar">
                    <img width="54" src="assets/images/${ safeAvatar }.jpg">
                    <h5 class="post-author">${ safeName }</h5>
                  </div>`;
  return template;
}

function articleTemplate(title, lastReply) {
  let safeTitle = xss.inHTMLData(title);
  let safeLastReply = xss.inHTMLData(lastReply);

  let template = `
          <article class="post">
            <h2 class="post-title">
              ${safeTitle}
           </h2>
           <p class="post-meta">
            ${safeLastReply}
            </p>
          </article>`;

  return template;
}

export default ui;
