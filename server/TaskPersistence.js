// @flow

/**
 * This interface is used to abstract out the persistence implementation and make it
 * easier to swap out S3 and write tests.
 *
 * TODO - Bryant - Just writing the S3TaskPersistence without this for now.  Also,
 * figure out how to export flowtype.
 */
interface TaskPersistence {
  saveTask: (taskInfo: Object) => boolean,
  getTask: (taskId: String) => Object
}

// export type TaskPersistence

