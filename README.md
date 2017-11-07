# Learning GraphQL and Relay
Build and use simple and scalable APIs

## Schema

A GraphQL schema (`GraphQLSchema`) can do multiple things. If we want clients to be able to request data, we need to define a *query* property on the schema. If we want to support any kind of insert, update, or delete operations on our data, we need to define a *mutation* property on the schema.

### resolve() function

Every field in a GraphQL object can define a `resolve()` function. The `resolve()` function is what the graphql library executes when it tries to answer queries asking about that field. For our simple example, we resolve that hello field with the unicode string 'howdy! 😃'.

### Basic CLI GraphQL Server at basic-server/

```sh
$ docker-compose run app node index.js

Client request: { hello }
Server has responded:  { hello: 'howdy! 😃' }
```
