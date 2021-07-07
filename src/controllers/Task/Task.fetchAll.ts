import { Request, Response } from 'express'
import * as TaskModel from 'services/TaskService'

export default async function fetchAll (request: Request, response: Response) {

  response.send(await TaskModel.fetch())

}
