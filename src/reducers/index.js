import {
  ADD__NEW__TASK,
  CLEAR__COMPLETED__TASKS,
  SAVING,
  TOGGLE__DARKMODE,
  TOGGLE__DONE__TASK,
  UPDATE__NEWTASK__INPUT
} from '../actions';
import addTaskToBdd from '../hooks/addTaskToBdd';

import deleteTaskFromBdd from '../hooks/deleteTaskFromBdd';

import { getData } from '../hooks/getData'

console.log(getData);

const initialState = {
  darkMode: false,
  tasks: getData,
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
            ...getData,
            {
              id: Date.now(),
              done: false,
              order: 0,
              title: state.newTaskInput
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
      //todo just update data and return tasks: getData
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
      console.log(state.tasks);
      state.tasks.forEach(async (task) => {
        if (task.don) await deleteTaskFromBdd(task.id)
      })
      return {
        ...state,
        tasks: getData
      }
    default:
      return state;
  }
};

export default reducer;