# Twitter clone with relay

### Technologies

- Typescript
- React
- Graphql
- Relay
- MongoDB
- KoaJS

### Notes

- Add a new MONGO_URI to your project

### Run in development mode

- ```yarn install``` to install dependencies
- ```yarn dev:server``` run server and go to localhost:3333/graphql
- ```cd packages/web``` and ```yarn start:dev``` to start web server (localhost/3000)

### Images

![feed](https://github.com/justjapann/twitter-clone-relay/blob/main/packages/web/assets/front1.png)
![login](https://github.com/justjapann/twitter-clone-relay/blob/main/packages/web/assets/front2.png)
![register](https://github.com/justjapann/twitter-clone-relay/blob/main/packages/web/assets/front3.png)

### Queries

- All posts

```
 {
   posts  {
     edges  {
       node  {
         id
         body
       }
       cursor
     }
     pageInfo  {
       hasNextPage
       hasPreviousPage
       startCursor
       endCursor
     }
   }
 }
```

### Mutations

- Create Post

```
 mutation{
   CreatePost(input: {body: "Body title"}) {
     postEdge {
       node {
         id
         body
       }
     }
     error
   }
 }
 ```

- Update Post

 ```
 mutation{
   UpdatePost(input: {id: "123456789", body: "Body title two"}) {
     postEdge {
       node {
         body
       }
      cursor
    }
     error
   }
 }
```

- Delete Post

```
 mutation{
   DeletePost(input: {id: "123456789"}) {
     error
     success
   }
 }

```

- Create User

```
mutation UserRegisterMutation($input: UserRegisterInput!) {
  userRegisterMutation(input: $input){
    token
    me {
      email
      displayName
      username
      id
      password
    }
    clientMutationId
  }
}

{
  "input": {
    "displayName":"japa",
    "username": "japa",
     "email": "japa@gmail.com",
    "password": "japinha",
    "clientMutationId": ""
  }
}
```

- Login User

```
mutation UserLoginMutation($input: UserLoginInput!) {
  userLoginMutation(input: $input) {
    token
    me {
      username
      password
    }
    clientMutationId
  }
}

{
  "input": {
    "username": "japa",
    "password": "japinha",
    "clientMutationId": ""
  }
}
```
