import { Router } from 'express'

import HealthCheckMiddleware from 'middlewares/HealthCheck'

import TaskRouter from './Task'

const AppRouter = Router()

AppRouter.use('/healthcheck', HealthCheckMiddleware)
AppRouter.use('/task', TaskRouter)

export default AppRouter