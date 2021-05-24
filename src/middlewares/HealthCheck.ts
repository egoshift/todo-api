import { Router, Request, Response } from 'express'

const HealthCheckRouter = Router()

HealthCheckRouter.get('/', (request: Request, response: Response) => {
  response.send({ healthCheck: true })
})

export default HealthCheckRouter