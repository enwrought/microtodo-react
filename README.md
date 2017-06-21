# Micro Todo List
Web todolist app on AWS.

## Environment
Before deployment, you'll need to set the environment variables:
  - STACK\_PREFIX - prefix for stack name and 

## Setting up the Project
To start running, do `npm install`, then either
`npm start` to start in development mode or set
`NODE_ENV=production` and run `npm start` for production mode.

Now open up [http://localhost:8080](http://localhost:8080)


The skeleton is taken from the React Router tutorial https://github.com/reactjs/react-router-tutorial

## Usage
TODO

## Deployment
To deploy, run
```
serverless deploy
```
and
```
aws s3 sync client/dist s3://s3bucketname
```
The cloudfront site is under the output `WebAppCloudFrontDistributionOutput`.