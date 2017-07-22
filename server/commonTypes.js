// @flow

export const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT'
};

// eslint-disable-next-line
export type HttpMethod = $Keys<typeof HTTP_METHOD>;

export type Event = {
  body: string,
  resource: string,
  requestContext: {
    httpMethod: HttpMethod
  },
  pathParameters: Object,
  httpMethod: HttpMethod,
  queryStringParameters: Object
};

export type OutputEvent = {
  statusCode: number,
  headers: Object,
  body: string
};

export type UserInfo = {
  userName: string,
  displayName: string
}
