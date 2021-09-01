// import  from '../actions';

//* change it when bdd is ok
import { ADD__NEW__TASK, TOGGLE__DARKMODE, TOGGLE__DONE__TASK, UPDATE__NEWTASK__INPUT } from '../actions';
import data from '../data/fakeData'

const initialState = {
  darkMode: false,
  //*change it when bdd is ok
  tasks: data,
  newTaskInput: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
      const copy = [...state.tasks]
      copy.forEach(task => {
        if (task.id == action.id) {
          task.done = !task.done
        }
      })
      return {
        ...state,
        tasks: copy
      }
    default:
      return state;
  }
};

export default reducer;