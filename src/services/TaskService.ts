import { knex } from 'services/Service'
import Task from 'types/Task.type'

export async function read() {
  const result = await knex.select().from('tasks')

  return result
}

export async function create(task: Task) {
  try {
    const result = await knex('tasks').insert(task)

    return result
  } catch (error) {
    throw new Error(error)
  }
}

export async function update({ id, ...task }: Task) {
  try {
    const result = await knex('tasks').update(task).where({ id })

    return result
  } catch (error) {
    throw new Error(error)
  }
}

export async function remove({ id }: Task) {
  try {
    const result = await knex('tasks').update({ deleted: true }).where({ id })

    return result
  } catch (error) {
    throw new Error(error)
  }
}