export interface IPost {
  id: String
  title: String
  body: String
}

export interface IPostEdge {
  cursor: String
  node: IPost
}
