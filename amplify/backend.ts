import * as cognito from 'aws-cdk-lib/aws-cognito';
import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

const backend = defineBackend({
  auth,
  data,
});

/* Define Admin group auth stack */
const userPoolId = backend.auth.resources.userPool.userPoolId;
const authGroupStack = backend.createStack('AuthGroupStack');
const adminGroup = new cognito.CfnUserPoolGroup(authGroupStack, 'AdminGroup', {
  userPoolId,
  groupName: 'Admin',
  description: 'Admin group',
});