import { Request, Response, NextFunction } from 'express'
import TaskSchema from './Task.schema'

function TaskMiddleware(request: Request, response: Response, next: NextFunction) {
  if (!TaskSchema.isValidSync(request.body))
    throw new Error('')

  const ValidSchema = TaskSchema.validateSync(request.body)

  response.locals.task = ValidSchema

  next()
}

export default TaskMiddleware