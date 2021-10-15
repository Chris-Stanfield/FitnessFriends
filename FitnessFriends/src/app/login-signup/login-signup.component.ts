const form: HTMLFormElement = document.querySelector('login') as HTMLFormElement;

form.onsubmit = () => {
  const formData = new FormData(form);

  const userName = formData.get('userName') as string;
  
  const pass = formData.get('pass') as string;

  if (auth(userName, pass)){
    /*Route to login page*/
  }
  else{
    /*Return error*/
  }


  return false;
}



/**
*
*auth takes a string as input and ensures the user exists in the database
*
*@param {string} target - The username or authentication token of the user you want to authenticate
*
*@param {string} id - The unique identifier that goes with the user you want to authenticate
*
*return: A boolean indicating if the user exists in the system or not.
*/
export function auth(target: string, id: string) {
  let userName = target
  let pass = id


  return false;
}
