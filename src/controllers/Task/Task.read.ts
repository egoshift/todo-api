import { Request, Response } from 'express'
import * as TaskService from 'services/TaskService'

export default async function read(request: Request, response: Response) {

  response.send(await TaskService.read())

}
