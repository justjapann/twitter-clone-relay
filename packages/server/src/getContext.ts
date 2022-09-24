import { Maybe } from '../../types'

import { UserDocument } from '../graphql/user/UserModel'
import { getAllDataLoaders } from '../graphql/schema/loaderRegister'
import { GraphQLContext } from '../graphql/schema/types'

type ContextVars = {
  user?: Maybe<UserDocument>
}

export const getContext = (ctx?: ContextVars): GraphQLContext => {
  const dataloaders = getAllDataLoaders()

  return {
    dataloaders,
    user: ctx?.user || null,
  }
}
