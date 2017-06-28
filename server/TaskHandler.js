// @flow

/**
 * This interface is used to abstract out the persistence implementation and make it easier
 * to swap out S3
 */
interface TaskPersistence {
  saveTask: (taskInfo: Object) => boolean
}
