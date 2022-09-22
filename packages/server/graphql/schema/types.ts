import { Maybe } from '../../../types'

import { UserDocument } from '../user/UserModel'
import { DataLoaders } from './loaderRegister'

export type GraphQLContext = {
  user?: Maybe<UserDocument>
  dataloaders?: DataLoaders
}
