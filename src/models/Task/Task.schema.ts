import yup from 'yup'

const TaskSchema = yup.object().shape({
  task: yup.string().required()
})

export default TaskSchema