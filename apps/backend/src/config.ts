
import { SequelizeOptions } from "sequelize-typescript";

export interface Config{
    database: SequelizeOptions;
}

export default (): Config => ({
    database:{
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_NAME,
        password: process.env.POSTGRES_PASS,
        database:  process.env.POSTGRES_DB,
        logging: process.env.NODE_ENV !== 'production',
        models: [],
        autoLoadModels:true,
    } as SequelizeOptions,

});