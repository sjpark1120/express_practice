const db = require("../db");

exports.findAll = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM posts", (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
};

exports.findById = (id) => {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM posts WHERE id = ?", [id], (err, row) => {
      if (err) {
        reject(err);
      }
      resolve(row);
    });
  });
};

exports.create = ({ title, content }) => {
  if (!title || !content) {
    throw new Error("INVALID_INPUT");
  }

  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO posts (title, content) VALUES (?, ?)",
      [title, content],
      function (err) {
        if (err) {
          reject(err);
        }
        resolve({
          id: this.lastID,
          title,
          content,
        });
      }
    );
  });
};

exports.update = (id, data) => {
  return new Promise((resolve, reject) => {
    db.run(
      "UPDATE posts SET title = ?, content = ? WHERE id = ?",
      [data.title, data.content, id],
      function (err) {
        if (err) {
          reject(err);
        }
        if (this.changes === 0) {
          reject(new Error("NOT_FOUND"));
        }
        resolve();
      }
    );
  });
};

exports.remove = (id) => {
  return new Promise((resolve, reject) => {
    db.run("DELETE FROM posts WHERE id = ?", [id], function (err) {
      if (err) {
        reject(err);
      }
      if (this.changes === 0) {
        reject(new Error("NOT_FOUND"));
      }
      resolve();
    });
  });
};
