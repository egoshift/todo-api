import { Router } from 'express'
import TaskMiddleware from 'models/Task/Task.validation'
import * as TaskController from 'controllers/Task/'

const TaskRouter = Router()

TaskRouter.get('/', TaskController.read)
TaskRouter.post('/new', TaskMiddleware, TaskController.create)
TaskRouter.put('/update', TaskMiddleware, TaskController.update)
TaskRouter.delete('/remove', TaskMiddleware, TaskController.remove)

export default TaskRouter