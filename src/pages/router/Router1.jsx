import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Dashboard2 from '../dashboard2/Dashboard2';
import Dashboard1 from '../dashboard1/Dashboard1';
import ForgetPassword from '../forgetPassword/ForgetPassword';
import ResetPassword from '../resetPassword/ResetPassword';
import DashboardMain from '../dashboardMain/DashboardMain';
import SingleBookDetails from '../../components/singleBookDetails/SingleBookDetails';
import WishListDashboard from '../wishlistDashboard/WishListDashboard';
import CartDashboard from '../cartDashboard/CartDashboard';

function Router1() {
  return (
    <div>
        <Router>
          <Routes>
              <Route exact path='/' element={<Dashboard1 />} />
              <Route path='/dashboard2' element={<Dashboard2 />}/>
              <Route path='/forgetpassword' element={<ForgetPassword />}/>
              <Route path='/resetpassword' element={<ResetPassword />}/>
              <Route path='/dashboardMain' element={<DashboardMain />}/>
              <Route path='/singleBookDetails' element={<SingleBookDetails />}/>
              <Route path='/wishlistDashboard' element={<WishListDashboard />}/>
              <Route path='/cartDashboard' element={<CartDashboard />}/>

          </Routes>
        </Router>
    </div>
  )
}

export default Router1;