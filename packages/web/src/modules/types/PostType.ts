export interface IPost {
  id: string
  body: string
}

export interface IPostEdge {
  cursor: string
  node: IPost
}
