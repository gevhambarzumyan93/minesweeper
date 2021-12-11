import Amplify, { Auth } from 'aws-amplify';

import awsExports from '../aws-exports';

Amplify.configure(awsExports);

export async function register({ email, password, firstName, lastName }) {
  const res = await Auth.signUp({
    username: email,
    password,
    attributes: {
      name: firstName,
      family_name: lastName,
      email,
      'custom:hasProfile': 'false',
      'custom:showTerms': 'true',
    },
  });
  return res;
}

export async function signIn({ username, password }) {
  console.log(username, password, '< username, password ');
  const user = await Auth.signIn(username, password);
  debugger;
  console.log(user, '< xz');
  if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
    return user;
  }
  // const type = user.attributes["custom:userType"];
  // const fullName = user.attributes["name"];
  // const email = user.attributes["email"];

  if (user.attributes['custom:hasProfile'] === 'false') {
    // await axios.post(`/${type}`, {
    //   email,
    //   password,
    //   type,
    //   fullName,
    //   username,
    // });
    // await Auth.updateUserAttributes(user, {
    //   "custom:hasProfile": "true",
    // });
  }
  return user;
}
