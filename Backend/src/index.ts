import "reflect-metadata"
import {app} from "./server"
import { AppDataSource } from "./config/dataSource";
import { PORT } from "./config/envs";


const initialize = async()=>{
    console.log("Server erected");
    await AppDataSource.initialize()
    console.log("DataBase Erected")
    app.listen(PORT || 3000 , ()=>{
        console.log(`server cumming on port ${PORT}`)
    })
}

initialize()