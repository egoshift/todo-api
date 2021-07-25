import { Knex } from 'knex'
import dotenv from 'dotenv'

dotenv.config()

interface KnexConfig {
  [key: string]: Knex.Config
}

const config: KnexConfig = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE,
      user:     process.env.USER,
      password: process.env.PASSWORD,
    },
    migrations: {
      directory: './src/data/migrations',
    },
    seeds: {
      directory: './src/data/seeds',
    },
  },
}

export default config
export { KnexConfig }
