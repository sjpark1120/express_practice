const service = require("../services/posts.service");

exports.getPosts = (req, res) => {
  res.json(service.findAll());
};

exports.getPostById = (req, res, next) => {
  try {
    const post = service.findById(parseInt(req.params.id));
    if (!post) throw new Error("NOT_FOUND");
    res.json(post);
  } catch (err) {
    next(err);
  }
};

exports.createPost = (req, res, next) => {
  try {
    const { title, content } = req.body;
    const newPost = service.create({ title, content });
    res.status(201).json(newPost);
  } catch (err) {
    next(err);
  }
};

exports.updatePost = (req, res, next) => {
  try {
    const { title, content } = req.body;
    const updatedPost = service.update(parseInt(req.params.id), {
      title,
      content,
    });
    res.json(updatedPost);
  } catch (err) {
    next(err);
  }
};

exports.deletePost = (req, res, next) => {
  try {
    service.remove(parseInt(req.params.id));
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
