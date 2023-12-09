# TO-DO-LIST DYNAMODB

This application is a to-do-list using DynamoDB.
The aim is running tests with github actions - unit and integration tests
**No presentation layer was decided yet(Lambda, Web Server, etc)**

## Links uteis para estudo

https://jestjs.io/docs/dynamodb
https://github.com/shelfio/jest-dynamodb

## Stack

- Node18
- Jest
- DynamoDB

## Data modelling

A TO-DO item seems like this:
```
{
  "userId": "c10b2375-befd-46eb-a5c5-225cd8b16b76",
  "taskId": "task-ff92c411aeb3",
  "taskName": "any_task_name",
  "description": "any_task_description"
  "createdAt": "2023-12-01T08:00:00Z",
  "dueDate": "2023-12-05T08:00:00Z",
  "completed": false
}
```

- userId is a uuid, a string with 36 positions
- taskId is a string, with the prefix "task-" and the last part of an uuid
- taskName is a string describing task name
- description is a string describing task details
- createdAt is a date, the creation date of the task
- duedate is a date, the completion date of the task
- completed is a boolean, indicates if the task is completed or not

## Data access patterns

- Retrieve tasks by userId
  - Return all tasks from a given userId
- Filter by Completion Status
  - Return tasks based on theis completion status
- Update Task Status
  - Modify the **completed** attribute when a task is done