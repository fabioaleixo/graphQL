const { gql } = require('apollo-server')

const typeDefs = gql`
  scalar Timestamp

  type Movie {
    id: ID
    createdAt: Timestamp
    name: String
    genre: String
    country: String
    language: String
  }

  type Query {
    movies: [Movie]
  }
`

module.exports = typeDefs