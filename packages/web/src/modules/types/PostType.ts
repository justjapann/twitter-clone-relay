export interface IPost {
  id: string
  title: string
  body: string
}

export interface IPostEdge {
  cursor: string
  node: IPost
}
