// @flow
import S3TaskPersistence from '../S3TaskPersistence';
import type { Event } from '../commonTypes';

const s3Persistence = new S3TaskPersistence();

/**
 * PUT /users/{userId}
 * Can save more than just tasks
 */
module.exports.saveTasks = (event: Event, context: Object, callback: Function): void => {
  const requestBody = JSON.parse(event.body);
  const userId = event.pathParameters.userId;
  const getDataFromS3 = s3Persistence.updateUserDataAsync(userId, requestBody);

  getDataFromS3.then(data => {
    // return data
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Successfully saved data',
        // TODO - Bryant - this is temporary for debugging, clean up
        // and figure out how to get a version id/timestamp from call
        // (and decide whether we want an echo)
        fullS3Object: data
      })
    };

    callback(null, response);
  }).catch(err => {
    callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Could not get data.',
        error: err,
        input: event
      })
    });
  });
};
