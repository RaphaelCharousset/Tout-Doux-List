// import  from '../actions';

//* change it when bdd is ok
import { ADD__NEW__TASK, TOGGLE__DARKMODE, UPDATE__NEWTASK__INPUT } from '../actions';
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
            id: Date.now(),
            title: state.newTaskInput,
            done: false
          }
        ]
      };
    case UPDATE__NEWTASK__INPUT:
      return {
        ...state,
        newTaskInput: action.value
      }
    default:
      return state;
  }
};

export default reducer;