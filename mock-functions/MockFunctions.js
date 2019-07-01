const fetch = require('node-fetch');

const login = async (username,password) => {
  let data = { uname : username, pwd: password };
  let result = await fetch('/authenticateUser', {
    method : 'POST',
    body : JSON.stringify(data)
  })
  .then(response => response.json())
  .then(response => {
    //take user to home screen
    console.log('reach success');
    if(response.status === 'success'){
      return true;
    }
  })
  .catch( error => {
    //maybe show some error dialog
    console.log(`reach error ${error}`);
    return false;
  })
  return result;
}

export { login };
