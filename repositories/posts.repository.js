const db = require("../db");
const sql = require("../sql/posts.sql");

exports.findAll = () => {
  return new Promise((resolve, reject) => {
    db.all(sql.SELECT_ALL, (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
};

exports.findById = (id) => {
  return new Promise((resolve, reject) => {
    db.get(sql.SELECT_BY_ID, [id], (err, row) => {
      if (err) {
        reject(err);
      }
      resolve(row);
    });
  });
};

exports.create = ({ title, content }) => {
  return new Promise((resolve, reject) => {
    db.run(sql.INSERT, [title, content], function (err) {
      if (err) {
        reject(err);
      }
      resolve({
        id: this.lastID,
        title,
        content,
      });
    });
  });
};

exports.update = (id, data) => {
  return new Promise((resolve, reject) => {
    db.run(sql.UPDATE, [data.title, data.content, id], function (err) {
      if (err) {
        reject(err);
      }
      resolve(this.changes);
    });
  });
};

exports.remove = (id) => {
  return new Promise((resolve, reject) => {
    db.run(sql.DELETE, [id], function (err) {
      if (err) {
        reject(err);
      }
      resolve(this.changes);
    });
  });
};
