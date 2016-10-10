import { compareDate } from './utils';

// TODO: find some way of not recomputing this all the time
export function dateSort(tasks) {
  return tasks.sort((task1, task2) =>
    compareDate(task1.dueDate, task2.dueDate)
  );
}

export const taskSort = dateSort;
