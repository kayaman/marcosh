---
title: AWS Cloud Development Kit
description: Getting started with AWS CDK
date: '2023-08-21'
categories: ["aws", "cdk]
published: true
---

## Before you begin

a lot of fuss is being made about [SST](https://sst.dev) and [AWS CDK](https://aws.amazon.com/cdk/). I have been using CDK for a while now and I am very happy with it. I have not tried SST yet but I am sure it is great too. I am not going to compare the two here. I am just going to show you how to get started with CDK.

## About

The AWS Cloud Development Kit (AWS CDK) is an open source software development framework to define your cloud application resources using familiar programming languages. AWS CDK provisions your resources in a safe, repeatable manner through AWS CloudFormation.

## Requirements

- An AWS account
- [Node.js](https://nodejs.org/en/download/) version 10.3.0 or later
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html) version 2.0 or later
- [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html) version 1.75.0 or later


## Installation

Install the **AWS CDK CLI**:

```sh
npm install -g aws-cdk
```

Verify the installation:

```sh
cdk --version
```

## Bootstrap

Get your AWS account number:

```sh
aws sts get-caller-identity
```

Get your account's default region:

```sh
aws configure get region
```

Bootstrap your account:

```sh
cdk bootstrap aws://ACCOUNT-NUMBER/REGION
```

## Create a new CDK project

Create a new directory and initialize a new CDK project:

```sh
mkdir cdk-demo
cd cdk-demo
cdk init --language typescript
```

Reviewing the files created:

```sh
tree -I node_modules -L 2

.
├── bin
│   └── cdk-demo.ts
├── cdk.json
├── jest.config.js
├── lib
│   └── cdk-demo-stack.ts
├── package.json
├── package-lock.json
├── README.md
├── test
│   └── cdk-demo.test.ts
└── tsconfig.json
```

## Specifying the environment correctly

Install **DefinitelyTyped** `@types/node`:

```sh
npm install @types/node
```

Modify `bin/cdk-demo.ts` to:

```ts
new CdkDemoStack(app, 'dev', { 
  env: { 
    account: process.env.CDK_DEPLOY_ACCOUNT || process.env.CDK_DEFAULT_ACCOUNT, 
    region: process.env.CDK_DEPLOY_REGION || process.env.CDK_DEFAULT_REGION 
}});
```

Create a script `cdk-deploy-to.sh`:

```bash
#!/usr/bin/env bash
if [[ $# -ge 2 ]]; then
    export CDK_DEPLOY_ACCOUNT=$1
    export CDK_DEPLOY_REGION=$2
    shift; shift
    npx cdk deploy "$@"
    exit $?
else
    echo 1>&2 "Provide account and region as first two args."
    echo 1>&2 "Additional args are passed through to cdk deploy."
    exit 1
fi
```

Make the script executable:

```sh
chmod +x cdk-deploy-to.sh
```

Deploy to a specific account and region:

```sh
./cdk-deploy-to.sh 123456789012 us-east-1
```

## Writing a first resource

```sh
npm install @aws-cdk/aws-ec2
```

Modify `lib/cdk-demo-stack.ts` to:

```ts
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class CdkDemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new ec2.Vpc(this, 'mainVPC', {
      maxAzs: 2,
      subnetConfiguration: [
        {
         cidrMask: 24,
         name: 'public-subnet',
         subnetType: ec2.SubnetType.PUBLIC,
       }
      ]
   });
  }
}
```

Deploy the stack:

Use the command below directly to deploy to your default account and region or use the `cdk-deploy-to.sh` script to deploy to a specific account and region.

```sh
cdk deploy
```

The cdk deploy command compiles your TypeScript into JavaScript and creates a CloudFormation change set to deploy this change. 

CDK manages all of this for you, along with uploading the template file to S3 and using CloudFormation to run it. After a few minutes, you should get a green check mark along with an ARN [Amazon Resource Name](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of your newly created CloudFormation stack. Your new VPC has now been deployed and is ready to be used.

## Clean up resources (optional but recommended)

```sh
cdk destroy
```

## Conclusion

Learning AWS CDK is a great way to learn AWS CloudFormation. SST is totally based on CDK and may come with a few limitations. Learning CDK will give you more freedom and power than knowing only SST.