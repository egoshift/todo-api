import * as yup from 'yup'

const TaskSchema = yup.object().shape({
  id: yup.number(),
  task: yup.string().default(''),
  type: yup.number().default(1),
  owner: yup.number(),
  status: yup.number().default(1),
  deleted: yup.bool().default(false),
})

export default TaskSchema