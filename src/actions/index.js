export const TOGGLE__DARKMODE = 'TOGGLE__DARKMODE';

export const toggleDarkMode = () => (
   {
    type: TOGGLE__DARKMODE
  }
);

export const ADD__NEW__TASK = 'ADD__NEW__TASK';

export const addNewTask = () => (
   {
    type: ADD__NEW__TASK,
  }
);

export const UPDATE__NEWTASK__INPUT = 'UPDATE__NEWTASK__INPUT';

export const updateNewtaskInput = (value) => (
   {
    type: UPDATE__NEWTASK__INPUT,
    value
  }
);