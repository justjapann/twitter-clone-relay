import { ApolloServer } from 'apollo-server'
import { schema } from '../graphql/schema'
import { connectDatabase } from './databaseConnection'
import UserQuery from '../../web/src/modules/pages/post/UserQuery'
import { config } from './environment'
import { getUser } from './auth'
import { getContext } from './getContext'
import Koa, { Request } from 'koa'
import Router from '@koa/router'
import bodyparser from 'koa-bodyparser'
import { graphqlHTTP, OptionsData } from 'koa-graphql'
import cors from '@koa/cors'

const app = new Koa()
const router = new Router()

const graphQlSettingsPerReq = async (req: Request): Promise<OptionsData> => {
  const user = await getUser(req.header.authorization)

  return {
    graphiql:
      config.NODE_ENV !== 'production'
        ? {
            headerEditorEnabled: true,
            shouldPersistHeaders: true,
          }
        : false,
    schema,
    pretty: true,
    context: getContext({
      user,
    }),
    customFormatErrorFn: ({ message, locations, stack }) => {
      /* eslint-disable no-console */
      console.log(message)
      console.log(locations)
      console.log(stack)
      /* eslint-enable no-console */

      return {
        message,
        locations,
        stack,
      }
    },
  }
}

const graphQlServer = graphqlHTTP(graphQlSettingsPerReq)
router.all('/graphql', graphQlServer)

app.use(cors())
app.use(bodyparser())
app.use(router.routes()).use(router.allowedMethods())

export default app

/* const server = new ApolloServer({
  schema,
})

connectDatabase()
  .then()
  .catch((error) => console.log(error))  

server.listen(3333, () => {
  console.log('server is running in port 3333')
})
 */
