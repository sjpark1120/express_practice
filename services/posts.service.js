const repo = require("../repositories/posts.repository");

exports.findAll = async () => {
  return repo.findAll();
};

exports.findById = async (id) => {
  const post = await repo.findById(id);
  if (!post) {
    throw new Error("NOT_FOUND");
  }
  return post;
};

exports.create = async ({ title, content }) => {
  if (!title || !content) {
    throw new Error("INVALID_INPUT");
  }

  return repo.create({ title, content });
};

exports.update = async (id, data) => {
  const updatedPost = await repo.update(id, data);
  if (updatedPost === 0) {
    throw new Error("NOT_FOUND");
  }
  return updatedPost;
};

exports.remove = async (id) => {
  const removedPost = await repo.remove(id);
  if (removedPost === 0) {
    throw new Error("NOT_FOUND");
  }
  return removedPost;
};
