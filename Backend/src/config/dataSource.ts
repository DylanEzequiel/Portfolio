import {DataSource} from "typeorm"
import { DB_PORT, DB_HOST, DB_PASSWORD, DB_USERNAME } from "./envs"

console.log(DB_PASSWORD)
console.log("username "+DB_USERNAME)
console.log(DB_PORT)
console.log(DB_HOST)



export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: 5432,
    username:  DB_USERNAME,
    password: DB_PASSWORD,
    database: "RATINGS",
    // dropSchema:true,
    synchronize: true,
    logging: false,
    entities: [],
    subscribers: [],
    migrations: [],
})