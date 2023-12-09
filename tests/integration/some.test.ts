import { describe, test, expect, beforeAll } from '@jest/globals'
import { makeDatabaseConnection } from './makeDatabaseConnection'
import { DynamoDB } from '@aws-sdk/client-dynamodb'
import { FileModel } from './File'

describe('[INTEGRATION TEST]', () => {
  let ddb: void

  beforeAll(() => {
    ddb = makeDatabaseConnection()
  })

  test('teste jest-dynamo', async () => {
    try {
      await FileModel.create({
        id: '1',
        hello: 'world'
      })
      console.log("item added successfully!")
      const allItems = await FileModel.scan().exec();
      console.log("[allItems]: ", allItems)
    } catch (error) {
      console.log("[ERROR]: ", error)
      return
    }
  })
})