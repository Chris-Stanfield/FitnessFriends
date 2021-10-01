

export function hello_world() {
  console.log("Hello world!");
  return "Hello from login-signup!";
}


/**
*
*auth takes a string as input and ensures the user exists in the database
*
*@param {string} target - The username or authentication token of the user you want to authenticate
*
*return: A boolean indicating if the user exists in the system or not.
*/
export function auth(target: string) {
  return false;
}
