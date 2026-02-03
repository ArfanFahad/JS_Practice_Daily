import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

console.log(graphqlHTTP);
console.log(buildSchema);

/*

Q1: What is schema in graphQL? 
Q2: What is Query in graphQL? 
Q3: What is Mutation in graphQL? 
Q4: What is resolver in graphQL? 

*/

// const schema = buildSchema(`
//     type Query {
//         hello: String
//     }
// `);

// const root = {
//   hello: () => "Hello World from GraphQL",
// };

// const app = express();
// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true,
//   })
// );

// app.listen(4000, () => {
//   console.log("Server running at http://localhost:4000/graphql");
// });
