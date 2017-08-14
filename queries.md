## get all links
{
  allLinks {
    url
  }
}

## create a link

mutation {
  createLink(
    url: "http://npmjs.com/package/graphql-tools",
    description: "Best tools!"
  ){
    id
    url
    description
  }
}

## get all users
{
  allUsers {
    name
  }
}

## create a user
mutation {
  createUser(
    name: "Maira Bello ",
    authProvider: {
      email: {
        email: "maira.bello@vtex.com",
        password: "test123"
      }
    }
  ){
    id
    name
  }
}