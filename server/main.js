// @flow
import fs from 'fs';
import AWS from 'aws-sdk';
import uuid from 'uuid';

const s3 = new AWS.S3();
// export const USERS_BUCKET = 'somearbitrarybucketname';
// Note: we will only use one bucket to save on number of requests?
// export const TASKS_BUCKET = process.env.TASKS_BUCKET;

const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT'
};

// eslint-disable-next-line
type HttpMethod = $Keys<typeof HTTP_METHOD>;

type Event = {
  body: string,
  resource: string,
  requestContext: {
    httpMethod: HttpMethod
  },
  pathParameters: Object,
  httpMethod: HttpMethod,
  queryStringParameters: Object
};

type OutputEvent = {
  statusCode: number,
  headers: Object,
  body: string
};

type UserInfo = {
  userName: string,
  displayName: string
}

// POST /users
module.exports.createUser = (event: Event, context: Object, callback: Function): void => {
  const userInfo : UserInfo = JSON.parse(event.body);
  const userId = uuid.v4();

  // Save to s3
  const createUser = s3.putObject({
    Bucket: process.env.TASKS_BUCKET,
    Key: `users_${userId}`,
    Body: JSON.stringify({ userInfo, userId, tasks: {} })
  }).promise();
  createUser.then(() => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Create successful!',
        input: event
      })
    };
    callback(null, response);
  }).catch(err => {
    callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Failed to create user',
        input: event,
        error: err
      })
    });
  });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

// TODO: implement
module.exports.saveTasks = (event: Event, context: Object, callback: Function): void => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event
    })
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

// TODO: implement
module.exports.loadTasks = (event: Event, context: Object, callback: Function): void => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event
    })
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
