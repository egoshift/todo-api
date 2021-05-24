import { Router } from 'express'

import HealthCheckRouter from 'middlewares/HealthCheck'

const AppRouter = Router()

AppRouter.use('/healthcheck', HealthCheckRouter)

export default AppRouter