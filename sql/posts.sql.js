exports.SELECT_ALL = `SELECT * FROM posts`;
exports.SELECT_BY_ID = `SELECT * FROM posts WHERE id = ?`;
exports.INSERT = `INSERT INTO posts (title, content) VALUES (?, ?)`;
exports.UPDATE = `UPDATE posts SET title = ?, content = ? WHERE id = ?`;
exports.DELETE = `DELETE FROM posts WHERE id = ?`;
