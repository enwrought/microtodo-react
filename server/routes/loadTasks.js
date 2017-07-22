// @flow
import S3TaskPersistence from '../S3TaskPersistence';
import type { Event } from '../commonTypes';

const s3Persistence = new S3TaskPersistence();

/**
 * GET /users/{userId}/tasks
 */
module.exports.loadTasks = (event: Event, context: Object, callback: Function): void => {
  const userId : string = event.pathParameters.userId;
  const getDataFromS3 = s3Persistence.getUserAsync(userId);

  getDataFromS3.then(data => {
    // return data
    const fullS3Object: Object = JSON.parse(data.Body.toString('ascii'));
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Successfully loaded data',
        // TODO - Bryant - this is temporary for debugging, clean up
        // and figure out how to get a version id/timestamp from call
        tasks: fullS3Object.tasks
      })
    };

    callback(null, response);
  }).catch(err => {
    // TODO - Bryant - check if the error was because object not found and throw
    // 404, otherwise throw 500
    callback(null, {
      statusCode: 404,
      body: JSON.stringify({
        message: 'Could not get data.',
        error: err,
        input: event
      })
    });
  });
};
