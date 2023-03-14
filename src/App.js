import logo from './logo.svg';
import './Assets/style/style.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ListOfCar from './Components/ListOfCar';
import Homepage from './Pages/Homepage';
import SearchCarBox from './Components/SearchCarBox';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import ListingPage from './Pages/ListingPage';
import Login from './Pages/User/Login';
import Register from './Pages/User/Register';
import ForgotPassword from './Pages/User/ForgotPassword';
function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/carlisting' element={<ListingPage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/forgotpassword' element={<ForgotPassword/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
