const service = require("../services/posts.service");

exports.getPosts = async (req, res) => {
  try {
    const posts = await service.findAll();
    res.json(posts);
  } catch (err) {
    next(err);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    const post = await service.findById(parseInt(req.params.id));
    res.json(post);
  } catch (err) {
    next(err);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const newPost = await service.create({ title, content });
    res.status(201).json(newPost);
  } catch (err) {
    next(err);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const updatedPost = await service.update(parseInt(req.params.id), {
      title,
      content,
    });
    res.json(updatedPost);
  } catch (err) {
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    await service.remove(parseInt(req.params.id));
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
