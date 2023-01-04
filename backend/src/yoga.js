import { createPubSub, createSchema, createYoga } from 'graphql-yoga'
import * as fs from 'fs'
import { Artist, Artwork, Query } from './resolvers'
import Painter from './models/painter'
import Painting from './models/painting'

const pubsub = createPubSub();

export const yoga = createYoga({
  schema: createSchema({
    typeDefs: fs.readFileSync(
      './src/schema.graphql',
      'utf-8'
    ),
    resolvers: {
      Query,
      // Mutation,
      // Subscription,
      Artist,
      Artwork,
    },
  }),
  context: {
    pubsub,
    Painter,
    Painting
  },
  //  graphqlEndpoint: '/',   // uncomment this to send the app to: 4000/
  graphiql: {
    subscriptionsProtocol: 'WS',
  },
});