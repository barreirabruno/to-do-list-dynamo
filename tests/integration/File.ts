import * as dynamoose from "dynamoose";

export const FileModel = dynamoose.model('File', {
  id: String,
  hello: String
}, {
  tableName: "files"
})