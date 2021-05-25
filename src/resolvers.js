const { models } = require('./db');

module.exports = {
  Query: {
    movies: () => models.Movie.findAll()
  }
}
