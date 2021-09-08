import { getData } from '../hooks/getData';
import { CONNECT } from '../actions';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT:
      getData(action.user)
        .then(result => {
          store.dispatch({type: "SET_TASKS", tasks: result})
          next(action)
        })
        .catch(error => {
          console.error('cannot get tasks with servor ', error)
          next(action)
        })
      break;
    default:
      next(action);
  }
};