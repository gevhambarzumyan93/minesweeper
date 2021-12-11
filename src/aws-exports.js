export default {
  aws_project_region: process.env.REACT_APP_BUCKET_REGION,
  aws_cognito_identity_pool_id: process.env.REACT_APP_COGNITO_IDENTITY_ID,
  aws_cognito_region: process.env.REACT_APP_COGNITO_REGION,
  aws_user_pools_id: process.env.REACT_APP_COGNITO_USER_POOL_ID,
  aws_user_pools_web_client_id: process.env.REACT_APP_COGNITO_WEB_CLIENT_ID,
  aws_user_files_s3_bucket: process.env.REACT_APP_BUCKET_NAME,
  aws_user_files_s3_bucket_region: process.env.REACT_APP_BUCKET_REGION,
  oauth: {
    domain: process.env.REACT_APP_COGNITO_DOMAIN,
    scope: ['phone', 'email', 'openid', 'profile', 'aws.cognito.signin.user.admin'],
    redirectSignIn: `${process.env.REACT_APP_COGNITO_REDIRECT_URL.toLowerCase()}/social-auth`,
    redirectSignOut: process.env.REACT_APP_COGNITO_REDIRECT_URL.toLowerCase(),
    responseType: 'code',
  },
  federationTarget: 'COGNITO_USER_POOLS',
};
