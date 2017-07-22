// @flow
import uuid from 'uuid';
import S3TaskPersistence from '../S3TaskPersistence';
import type { Event, UserInfo } from '../commonTypes';

const s3Persistence = new S3TaskPersistence();

/**
 * POST /users
 *
 * Generates a new userId and saves it to S3 bucket.
 * @param {UserInfo} event.body - userName and display name of the new user to create
 * @returns void - runs callback with a 201 status and `userId` if create is successful
 * and a 500 if fails
 */
module.exports.createUser = (event: Event, context: Object, callback: Function): void => {
  const userInfo : UserInfo = JSON.parse(event.body);
  const userId : string = uuid.v4();

  // Save to s3
  const createUser = s3Persistence.putUserAsync(userId,
    { userInfo, userId, tasks: {} });

  createUser.then(() => {
    const response = {
      statusCode: 201,
      body: JSON.stringify({
        message: 'Create successful!',
        userId
      })
    };
    callback(null, response);
  }).catch(err => {
    // TODO: write error handler
    callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Failed to create user',
        input: event,
        error: err
      })
    });
  });
};