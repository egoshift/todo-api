import * as yup from 'yup'

const TaskSchema = yup.object().shape({
  id: yup.number(),
  task: yup.string().required(),
  type: yup.number().default(1),
  owner: yup.number().required(),
  status: yup.number().default(1),
  deleted: yup.bool().default(false),
})

export default TaskSchema