import "reflect-metadata"
import express from "express"

import {ApolloServer} from "apollo-server-express"

import AppDataSource from "./db_Orm/Schema"
import { buildSchema } from "type-graphql"
import { Taskresolver } from "./resolver/Task"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"

const main  =async () =>{
const apolloserver = new ApolloServer({
    schema: await buildSchema({
        resolvers:[Taskresolver],
        validate:false
    }),
    plugins:[ ApolloServerPluginLandingPageGraphQLPlayground()]
})

await apolloserver.start();
const app : any = express();
apolloserver.applyMiddleware({ app })

app.get('/' , (req:any,res:any)=> res.send("hellow wo"))
AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

  app.listen(3000);
}
main().catch((err)=> console.error(err));
