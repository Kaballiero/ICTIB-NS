import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { User } from "./app/entities/user/user.entity";


const configuration: PostgresConnectionOptions = {
    "type": "postgres",
    "host": process.env.POSTGRES_HOST,
    "port": Number(process.env.POSTGRES_PORT),
    "username": process.env.POSTGRES_NAME,
    "password": process.env.POSTGRES_PASS,
    "database": process.env.POSTGRES_DB,
    "entities": ["dist/**/*.entity{.ts,.js}", User],
    "synchronize": true

}

export default configuration;