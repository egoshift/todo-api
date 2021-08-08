import { Request, Response } from 'express'
import * as TaskService from 'services/TaskService'

export default async function create(request: Request, response: Response) {
  try {
    const result = await TaskService.create(response.locals.task)

    response.send(result)
  } catch (error) {
    throw new Error(error)
  }
}
