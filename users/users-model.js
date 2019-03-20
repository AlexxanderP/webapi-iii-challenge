const knex = require("knex");
const knexConfig = require("../knexfile.js");

const db = knex(config.development);

module.exports = {
  find,
  findById,
  add,
  remove,
  update,
  findUserPosts,
  findPostsById,
  addPost
};

function find(query) {
  let { page = 1, limit = 5, sortby = "id", sortdir = "asc" } = query;

  const offset = limit * (page - 1);

  let rows = db("users")
    .orderBy(sortby, sortdir)
    .limit(limit)
    .offset(offset);

  return rows;
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
