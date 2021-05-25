const { ApolloServer } = require('apollo-server')

const typeDefs = require('./schema')
const movieResolvers = require('./resolvers')
const TimestampType = require('./GraphQLTimestamp')
const resolvers = [movieResolvers, TimestampType]
const { models, db } = require('./db')

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen()
  .then(({ url }) => console.log(`Listen on ${url}`))