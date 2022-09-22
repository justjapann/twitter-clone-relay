import { ApolloServer } from 'apollo-server'
import { schema } from '../graphql/schema'
import { connectDatabase } from './databaseConnection'
import UserQuery from '../../web/src/modules/pages/post/UserQuery'

/* const Koa = require('koa')
const mount = require('koa-mount')
const { graphqlHTTP } = require('koa-graphql')

const app = new Koa()

app.use(
  mount(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    }),
  ),
)

app.listen(3333) */

const server = new ApolloServer({
  schema,
})

connectDatabase()
  .then()
  .catch((error) => console.log(error))

server.listen(3333, () => {
  console.log('server is running in port 3333')
})
