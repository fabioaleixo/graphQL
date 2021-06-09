const { models } = require('./db');

module.exports = {
  Query: {
    movies: () => models.Movie.findAll(),
    getMovie: (_, args) => models.Movie.findOne(args),
    getAwards: (_, args) => {
      const result = models.Movie.findAwards(args)

      if(!result.length) {
        return { 
          id_movie: args.id,
          oscar: 0
        }
      }
      return result[0];
    },
    users: () => models.User.findAll(),
    getUserByName: (_, args) => models.User.findOne(args)
  },
  Mutation: {
    createUser: (_, { data }) => models.User.create(data),
    createMovie: (_, { data }) => models.Movie.create(data)
  }
}
