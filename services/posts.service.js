let posts = [{ id: 1, title: "첫 글", content: "내용1" }];

exports.findAll = () => {
  return posts;
};

exports.findById = (id) => {
  return posts.find((post) => post.id === id);
};

exports.create = ({ title, content }) => {
  if (!title || !content) {
    throw new Error("INVALID_INPUT");
  }

  const newPost = { id: posts.length + 1, title, content };
  posts.push(newPost);
  return newPost;
};

exports.update = (id, data) => {
  const post = posts.find((post) => post.id === id);
  if (!post) {
    throw new Error("NOT_FOUND");
  }

  if (!data.title && !data.content) {
    throw new Error("INVALID_INPUT");
  }

  if (data.title) {
    post.title = data.title;
  }
  if (data.content) {
    post.content = data.content;
  }
  return post;
};

exports.remove = (id) => {
  const postIndex = posts.findIndex((post) => post.id === id);
  if (postIndex === -1) {
    throw new Error("NOT_FOUND");
  }
  posts.splice(postIndex, 1);
  return true;
};
