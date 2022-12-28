import logo from './logo.svg';
import './App.css';
import SignIn from './pages/sign-In/SignIn';
import SignUp from './pages/sign-Up/SignUp';
import Dashboard1 from './pages/dashboard1/Dashboard1';
import ForgetPassword from './pages/forgetPassword/ForgetPassword';
import ResetPassword from './pages/resetPassword/ResetPassword';
import Dashboard2 from './pages/dashboard2/Dashboard2';
import Router1 from './pages/router/Router1';
import Header from './components/header/Header';
import Book from './components/book/Book';
import DashboardMain from './pages/dashboardMain/DashboardMain';
import SingleBookDetails from './components/singleBookDetails/SingleBookDetails';
import WishListDashboard from './pages/wishlistDashboard/WishListDashboard';
import WishList from './components/wishlist/WishList';

function App() {
  return (
    <div >
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <Dashboard1 /> */}
      {/* <ForgetPassword /> */}
      {/* <ResetPassword /> */}
      {/* <Dashboard2 /> */}
      <Router1 />
      {/* <Header /> */}
      {/* <Book /> */}
      {/* <DashboardMain /> */}
      {/* <SingleBookDetails /> */}
      {/* <WishListDashboard /> */}
      {/* <WishList /> */}
    </div>
  );
}

export default App;
