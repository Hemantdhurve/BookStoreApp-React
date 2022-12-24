import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Dashboard2 from '../dasboard2/Dashboard2';
import Dashboard1 from '../dashboard1/Dashboard1';
import ForgetPassword from '../forgetPassword/ForgetPassword';
import ResetPassword from '../resetPassword/ResetPassword';
import SignIn from '../sign-In/SignIn';
import SignUp from '../sign-Up/SignUp';

function Router1() {
  return (
    <div>
        <Router>
          <Routes>
              <Route exact path='/' element={<Dashboard1 />} />
              <Route path='/dashboard2' element={<Dashboard2 />}/>
              <Route path='/forgetpassword' element={<ForgetPassword />}/>
              <Route path='/resetpassword' element={<ResetPassword />}/>
          </Routes>
        </Router>
    </div>
  )
}

export default Router1;