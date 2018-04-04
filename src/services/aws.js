// import AWS from 'aws-sdk/global'
// import 'aws-sdk/clients/dynamodb'

// const ROLE_ARN = 'arn:aws:iam::407461997746:role/vueaws'

// export let AwsDocClient = null

// export function setCredentials (idToken) {
//   AWS.config.credentials = new AWS.WebIdentityCredentials({
//     RoleArn: ROLE_ARN,
//     WebIdentityToken: idToken
//   })

//   AwsDocClient = new AWS.DynamoDB.DocumentClient({
//     region: 'us-east-1'
//   })
// }

import AWS from 'aws-sdk';
import SecretKeys from './keys.js'
console.log(SecretKeys);
// Set the region
AWS.config.update(
  SecretKeys
);

// Create DynamoDB document client
const docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });

export { docClient as default };
