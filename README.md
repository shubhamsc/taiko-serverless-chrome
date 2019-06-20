# Sample project to run taiko on aws lambda with serverless chrome

## Setup project

1. Install serverless
```
    npm install serverless -g
```
2. Create the sample project
```
    serverless create -u https://github.com/shubhamsc/taiko-serverless-chrome
```
3. Install the dependencies
```
    npm install
```

## Configure aws credentials

Configure your aws credentials
```
    export AWS_ACCESS_KEY_ID=<access_key>
    export AWS_SECRET_ACCESS_KEY=<secret_key>
```

## Deploy the project

1. Deploy the complete project
```
    serverless deploy -v
```
2. Deploy a function
```
    serverless deploy -f taiko-test
```

## Run the project

1. Invoke the fuction locally
```
    serverless invoke local -f taiko-test
```
2. Invoke the function in aws
```
    serverless invoke -f taiko-test
```