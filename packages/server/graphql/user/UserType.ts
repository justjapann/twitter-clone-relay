import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql'
import { globalIdField } from 'graphql-relay'
import { connectionDefinitions, connectionArgs, withFilter } from '@entria/graphql-mongo-helpers'
import { registerTypeLoader, nodeInterface } from './graphql/typeRegister'

import { User } from './UserModel'
import { load } from './UserLoader'

export const UserType = new GraphQLObjectType<User>({
  name: 'User',
  fields: () => ({
    id: globalIdField('User'),
    username: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (user) => user.username,
    },
    displayName: {
      type: GraphQLString,
      resolve: (user) => user.displayName,
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (user) => user.email,
    },
  }),
  interfaces: () => [nodeInterface],
})

export const UserConnection = connectionDefinitions({
  name: 'UserConnection',
  nodeType: UserType,
})

registerTypeLoader(UserType, load)
