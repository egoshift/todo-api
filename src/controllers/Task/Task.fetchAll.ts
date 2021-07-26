import { Request, Response } from 'express'
import * as TaskService from 'services/TaskService'

export default async function fetchAll (request: Request, response: Response) {

  response.send(await TaskService.fetch())

}
