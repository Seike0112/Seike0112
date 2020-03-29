import {
  ADD_TASK_LOG,
  DELETE_ALL_LOGS
} from '../actions'

const logs = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK_LOG:
      const taskLog = {
        description: action.description,
        at: action.at
      }
      return state
    case DELETE_ALL_LOGS:
      return []
    default:
      return state
  }
}

export default logs