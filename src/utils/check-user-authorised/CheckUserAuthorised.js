import { GET_USER_INFO } from '../../api/endpoints/auth.js';

const CheckUserAthorised = () => {
  let response;

  fetch(GET_USER_INFO)
    .then(res => res.json())
    .then(data => response = data)
    .catch(err => err);
  if (response) {
    return true;
  }

  return false;

};

export default CheckUserAthorised;