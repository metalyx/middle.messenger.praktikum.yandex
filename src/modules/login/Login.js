import pug from 'pug';
import fs from 'fs';
import path from 'path';

const Login = () => {
  const pugString = fs.readFileSync(path.join(__dirname, './login.pug'), 'utf8');
  const compiledFunction = pug.compile(pugString);
  
  return compiledFunction();
};

export default Login;