const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];
const lastActivityTime = new Date();
const USER = {
  name,
  lastActivityTime,
};
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve(posts);
    }, 2000);
  });
}
// createPost({ title: "Post Three", body: "This is post three" }, getPosts);
function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date());
    }, 1000);
  });
}
function deletePost() {
  return new Promise((resolve, reject) => {
    posts.pop();
    resolve(posts);
  });
}
updateLastUserActivityTime().then((res) => {
  console.log("Before creating post 4, user lastActivityTime = ", res);
  Promise.all([
    createPost({ title: "Post Three", body: "This is post three" }),
    updateLastUserActivityTime(),
  ])
    .then((values) => {
      const createdPost = values[0];
      const afterPost = values[1];
      console.log("After Creating post 4 >>>>");

      console.log("posts >>", createdPost);
      console.log("User last activity time", afterPost.getTime());
      deletePost().then((res) => console.log(res));
    })
    .catch((err) => console.log(err));
});
