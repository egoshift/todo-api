import { knex } from 'services/Service'

export async function fetch() {
  const result = await knex.select().from('tasks')

  return result
}