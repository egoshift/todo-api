import { InferType } from 'yup'
import TaskSchema from 'models/Task/Task.schema'

type Task = InferType<typeof TaskSchema>

export default Task