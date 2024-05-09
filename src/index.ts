import "reflect-metadata"
import express from "express"
import AppDataSource from "./db_Orm/Schema"

const app = express();

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

    app.listen(3000);