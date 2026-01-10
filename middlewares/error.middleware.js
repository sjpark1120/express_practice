module.exports = (err, req, res, next) => {
  if (err.message === "NOT_FOUND") {
    return res.status(404).json({ message: "Post not found" });
  }
  if (err.message === "INVALID_INPUT") {
    return res.status(400).json({ message: "Invalid input" });
  }
  if (err.message === "POST_NOT_FOUND") {
    return res.status(404).json({ message: "Post not found" });
  }

  return res.status(500).json({ message: "Internal server error" });
};
