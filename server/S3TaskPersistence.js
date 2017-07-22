// @flow
import AWS from 'aws-sdk';
// import type TaskPersistence from './TaskPersistence';

export const USER_BUCKET_SUFFIX = '_user';
export default class S3TaskPersistence {
  s3 = new AWS.S3();

  /**
   * Returns promise for getting the user object in S3
   * @param {string} userId
   */
  getUserAsync(userId: string): Promise<any> {
    const params = {
      Bucket: process.env.TASKS_BUCKET,
      Key: `${userId}_users`
    };
    return this.s3.getObject(params).promise();
  }

  /**
   * Saves a user object into S3
   * @param {string} userId
   * @param {Object} userObj - full object to save or replace into S3
   */
  putUserAsync(userId: string, userObj: Object): Promise<any> {
    return this.s3.putObject({
      Bucket: process.env.TASKS_BUCKET,
      Key: `${userId}_users`,
      Body: JSON.stringify(userObj)
    }).promise();
  }

  /**
   * Does a shallow Object.assign() to overwrite object in S3 with new properties.
   * Useful for updating tasks without changing userInfo
   *
   * // TODO - Bryant - need to define how data is structured to be able to best
   * // update parts independently
   * // might be good to associate with the redux structure
   * @param {string} userId
   * @param {Object} partialUserObj - partial object to save and replace S3 object
   */
  async updateUserDataAsync(userId: string, partialUserObj: Object): Promise<any> {
    const storedObj = await this.getUserAsync(userId);
    const parsedObj = JSON.parse(storedObj.Body.toString('ascii'));
    const params = {
      Bucket: process.env.TASKS_BUCKET,
      Key: `${userId}_users`,
      Body: JSON.stringify({ ...parsedObj, ...partialUserObj })
    };
    return this.s3.putObject(params).promise();
  }
}
