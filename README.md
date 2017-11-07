# Learning 📈 GraphQL and ⚛️ Relay
Build and use simple and scalable APIs

## Schema

A GraphQL schema can expose multiple capabilities. If we want clients to be able to ask for data, we need to define a query property on the schema. If we want to support any kind of insert, update, or delete operations on our data, we need to define a mutation property on the schema.

### resolve() function

Every field in a GraphQL object can define a resolve() function. The resolve() function is what the graphql library executes when it tries to answer queries asking about that field. For our simple example, we resolve that hello field with the string world.

### Basic CLI GraphQL Server

```sh
$ docker-compose run app node index.js

Client request: { hello }
Server has responded:  { hello: 'world' }
```
