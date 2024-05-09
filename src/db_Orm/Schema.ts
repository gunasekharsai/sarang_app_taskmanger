import { DataSource } from "typeorm"

import {User} from "../entities/user"
const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Guna@2400",
    database: "newDb",
    logging: true,
    synchronize : true,
    entities :[
        User
    ]
})

export default AppDataSource;