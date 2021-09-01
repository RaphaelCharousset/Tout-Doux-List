//* change it when bdd is ok
import {
  ADD__NEW__TASK,
  CLEAR__COMPLETED__TASKS,
  SAVING,
  TOGGLE__DARKMODE,
  TOGGLE__DONE__TASK,
  UPDATE__NEWTASK__INPUT
} from '../actions';

import getData from '../hooks/getData';

const tasks = getData
console.log(tasks);

const initialState = {
  darkMode: false,
  //*change it when bdd is ok
  tasks: tasks,
  newTaskInput: '',
  saving: false
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVING:
      return {
        ...state,
        saving: !state.saving
      }
    case TOGGLE__DARKMODE:
      return {
        ...state,
        darkMode: !state.darkMode, 
      };
    case ADD__NEW__TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: state.tasks.length + 1,
            title: state.newTaskInput,
            done: false
          }
        ],
        newTaskInput: '',
      };
    case UPDATE__NEWTASK__INPUT:
      return {
        ...state,
        newTaskInput: action.value
      }
    case TOGGLE__DONE__TASK:
      const toggleCopy = [...state.tasks]
      toggleCopy.forEach(task => {
        if (task.id == action.id) {
          task.done = !task.done
        }
      })
      return {
        ...state,
        tasks: toggleCopy
      }
    case CLEAR__COMPLETED__TASKS:
      const clearCopy = [...state.tasks]
      const undoneTasks = clearCopy.filter(task => !task.done)
      return {
        ...state,
        tasks: undoneTasks
      }
    default:
      return state;
  }
};

export default reducer;