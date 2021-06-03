import { Response, Request, Router } from 'express'
import fetchAll from 'controllers/Task/Task.fetchAll'

const TaskRouter = Router()

TaskRouter.get('/', fetchAll)

export default TaskRouter