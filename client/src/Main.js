import { Switch, Route } from 'react-router-dom';
import Landing from './routes/Landing';
import SignUp from './routes/SignUp';
import SignIn from './routes/SignIn';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
    <Switch>
      <Route path='/' component={Landing}></Route>
      <Route path='/auth/signup' component={SignUp}></Route>
      <Route path='/auth/signin' component={SignIn}></Route>
    </Switch>
    )};