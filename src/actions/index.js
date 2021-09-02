export const SAVING = 'SAVING';
export const saving = () => (
   {
    type: SAVING
  }
);

export const TOGGLE__DARKMODE = 'TOGGLE__DARKMODE';
export const toggleDarkMode = () => (
   {
    type: TOGGLE__DARKMODE
  }
);

export const ADD__NEW__TASK = 'ADD__NEW__TASK';
export const addNewTask = (id) => (
   {
    type: ADD__NEW__TASK,
    id
  }
);

export const UPDATE__NEWTASK__INPUT = 'UPDATE__NEWTASK__INPUT';
export const updateNewtaskInput = (value) => (
   {
    type: UPDATE__NEWTASK__INPUT,
    value
  }
);

export const TOGGLE__DONE__TASK = 'TOGGLE__DONE__TASK';
export const toggleDoneTask = (id) => (
   {
    type: TOGGLE__DONE__TASK,
    id
  }
);

export const CLEAR__COMPLETED__TASKS = 'CLEAR__COMPLETED__TASKS';
export const clearCompletedTasks = () => (
   {
    type: CLEAR__COMPLETED__TASKS,
  }
);
