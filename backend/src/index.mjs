import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { 
  DynamoDBDocumentClient, 
  UpdateCommand, 
  PutCommand,
  GetCommand 
} from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const dynamo = DynamoDBDocumentClient.from(client);
const tableName = process.env.TABLE_NAME;

export const handler = async (event) => {
  console.log('Event:', JSON.stringify(event));
  console.log('Table Name:', tableName);

  // Try to get the item first
  try {
    const getResult = await dynamo.send(new GetCommand({
      TableName: tableName,
      Key: { ID: 'visitorCount' }
    }));

    // If the item does not exist, initialize it
    if (!getResult.Item) {
      console.log('Initializing counter...');
      await dynamo.send(new PutCommand({
        TableName: tableName,
        Item: { ID: 'visitorCount', count: 0 }
      }));
    }
  } catch (error) {
    console.error("Error getting/initializing item:", error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        error: 'Could not retrieve or initialize count',
        details: error.message 
      })
    };
  }

  // Now proceed to update the count
  const updateParams = {
    TableName: tableName,
    Key: { ID: 'visitorCount' },
    UpdateExpression: 'SET #count = if_not_exists(#count, :start) + :inc',
    ExpressionAttributeNames: { '#count': 'count' },
    ExpressionAttributeValues: { ':inc': 1, ':start': 0 },
    ReturnValues: 'UPDATED_NEW'
  };

  try {
    const result = await dynamo.send(new UpdateCommand(updateParams));
    console.log('Update result:', JSON.stringify(result));
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ count: result.Attributes.count })
    };
  } catch (error) {
    console.error("Error updating count:", error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        error: 'Could not update count',
        details: error.message 
      })
    };
  }
};