import * as dynamoose from "dynamoose";

export const makeDatabaseConnection = () => {
  const ddb = new dynamoose.aws.ddb.DynamoDB({
    "credentials": {
        "accessKeyId": "AKID",
        "secretAccessKey": "SECRET"
    },
    "region": "us-east-1"
  });
  dynamoose.aws.ddb.local();
}