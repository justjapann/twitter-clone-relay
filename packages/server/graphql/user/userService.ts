import { UserModel, User, UserDocumentInterface } from './UserModel'

export const findUserByEmail = async ({ email }: { email: string }): Promise<User | undefined> => {
  return await UserModel.findOne({ email })
}

export const findUserByUsername = async ({
  username,
}: {
  username: string
}): Promise<User | undefined> => {
  return await UserModel.findOne({ username })
}

export const findUserLoginData = async ({
  username,
}: {
  username: string
}): Promise<UserDocumentInterface | undefined> => {
  return await UserModel.findOne({ username }).select('+password')
}
