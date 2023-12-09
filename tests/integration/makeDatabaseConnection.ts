import * as dynamoose from "dynamoose";

export const makeDatabaseConnection = () => {
  // const ddb = new dynamoose.aws.ddb.DynamoDB({
  //   "credentials": {
  //       "accessKeyId": "AKID",
  //       "secretAccessKey": "SECRET"
  //   },
  // });
  dynamoose.aws.ddb.local("http://localhost:8000");
}