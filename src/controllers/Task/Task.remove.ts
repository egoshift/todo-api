import { Request, Response } from 'express'
import * as TaskService from 'services/TaskService'

export default async function remove(request: Request, response: Response) {
  try {
    await TaskService.remove(response.locals.task)
    
    response.sendStatus(200)
  } catch (error) {
    response.sendStatus(401)
    throw new Error(error)
  }
}