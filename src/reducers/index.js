import {
  ADD__NEW__TASK,
  CLEAR__COMPLETED__TASKS,
  CONNECT,
  SAVING,
  TOGGLE__DARKMODE,
  TOGGLE__DONE__TASK,
  UPDATE__NEWTASK__INPUT
} from '../actions';

import deleteTaskFromBdd from '../hooks/deleteTaskFromBdd'

import { getData } from '../hooks/getData'

// console.log(await getData());

const initialState = {
  darkMode: false,
  tasks: [],
  newTaskInput: '',
  saving: false,
  user: undefined
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONNECT:
      return {
        ...state,
        user: action.user,
      }
    case 'SET_TASKS':
      return {
        ...state,
        tasks: action.tasks
      }
    case SAVING:
      return {
        ...state,
        saving: !state.saving
      }

    case TOGGLE__DARKMODE:
      return {
        ...state,
        darkMode: !state.darkMode, 
      }

    case ADD__NEW__TASK:
        return {
          ...state,
          tasks: [
            ...state.tasks,
            {
              id: action.id,
              done: false,
              order: 0,
              title: state.newTaskInput,
              uid: state.uid
            }
          ],
          newTaskInput: '',
        }
  
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
      state.tasks.forEach( (task) => {
        if (task.done) {
          deleteTaskFromBdd(task.id)
        }
      })
      return {
        ...state,
        tasks: state.tasks.filter(task => !task.done)
      }
    default:
      return state;
  }
};

export default reducer;