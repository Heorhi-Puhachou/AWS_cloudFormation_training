# AWS_cloudFormation_training

## This project contains folders that present stacks for AWS.

start-point - a base stack that contains a description of the endpoint that calls GatewayFunction. GatewayFunction starts StateMachine which contains 4 functions with the choice statement. The last function starts writing data to DB. Code for putting data to DB placed in codebase-layer.

To test those stacks you must have installed

1) AWS CLI (https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

2) AWS SAM CLI (https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)

3) NodeJS 16

4) Insomnia/Postman REST client

As the first step must be to deploy the codebase-layer stack. After that line with arn for this stack (something like arn:aws:lambda:us-east-1:899012776854:layer:codebase-layer:10) must be added to template of start-point stack. After that start-point stack can be deployed. The output of the start-point stack contains the address to call GatewayFunction (something like https://rnldolbnpe.execute-api.us-east-1.amazonaws.com/Prod/test/). Use Postman or Insomnia to send the request body

{
"value": "invalid value"
}

or

{
"value": "valid value"
}

"valid value" and "invalid value" is a flags for choice in StateMachine.

After that will be possible to check logs and records in test-table (Dynamo DB).
