import { Maybe } from '../../../../types'

import { UserDocument } from '../UserModel'
import { DataLoaders } from '../graphql/loaderRegister'

export type GraphQLContext = {
  user?: Maybe<UserDocument>
  dataloaders?: DataLoaders
}
