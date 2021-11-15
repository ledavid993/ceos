# Nest.js + MongoDB + TypeORM + GraphQL

Flashcard project implemented as a GraphQL, using Nest.js and Mongodb. It can be use to start building microservices or stand alone backend with the necessary boilerplates already added.

## Running on your local machine

You will need docker and yarn installed.

If you have not install yarn, please do so first:

```
npm i -g yarn
```

```
docker-compose up
```

http://localhost:3000/graphql is the endpoint to test queries, and mutation

To create a flashcard

```json
mutation{
  createFlashcard(createFlashCard: {
    front: "What is the meaning of life?"
    back: "42"
  }){
    uid,
    front,
    back,
    createdAt,
    updatedAt
  }
}
```

To get all flashcards

```json
{
  getFlashcards{
    uid,
    front,
    back,
    createdAt,
    updatedAt
  }
}
```

#### Running Unit Testing

```
cd service-flashcard
yarn test --watch
```
