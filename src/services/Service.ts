import Knex from 'knex'
import knexconfig from '@config/knex.config'

const knex = Knex(knexconfig)

export { knex }