import AWS from "aws-sdk";

export function call(action, params){
 const dynamoDb= new AWS.DynamoDB.DocumentClient();

 return dynamoDb[action](params).promise();
}

export function success(body){
    return buildResponse(200, body);
}

export function failure(body){
    return buildResponse(500, body);
}

function buildResponse(statusCode, body){
    return {
      statusCode: statusCode,
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify(body)
    };
}