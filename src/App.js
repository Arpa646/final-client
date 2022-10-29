import logo from './logo.svg';
import './App.css';
import Navbar from './pages/shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Appointment from './pages/Appointment/Appointment';

import LogIn from './pages/Log In/LogIn';
import SignUp from './pages/Log In/SignUp';
import RequireAuth from './pages/Log In/RequireAuth';
import Contact from './pages/Home/Contact';
 import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard';
import MyAppointments from './pages/Dashboard/MyAppointments';
import MyReview from './pages/Dashboard/MyReview';
import Users from './pages/Dashboard/Users';
import AddProduct from './pages/Dashboard/AddProduct';
import RequireAdmin from './pages/Log In/RequireAdmin';
import ManageExpert from './pages/Dashboard/ManageExpert';
import Footer from './pages/shared/Footer';
import Shop from './pages/shop.js/Shop';
import ReviewOrder from './pages/shop.js/ReviewOrder';
import ClientReview from './pages/Home/ClientReview';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="about" element={<About />} />
        <Route path="clientReview" element={<ClientReview />} />

        <Route path="shop" element={<Shop />} />
        <Route path="package" element={<RequireAuth><Appointment /></RequireAuth>}></Route>
        <Route path="review" element={<ReviewOrder />}></Route>



        <Route path="appointment" element={<RequireAuth><Appointment /></RequireAuth>} />
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>
        
        } >

 <Route index element={<MyAppointments></MyAppointments>}></Route>
 <Route path="reviews" element={<MyReview></MyReview>}></Route>
 <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
 <Route path="addSProduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
 <Route path="manageExpert" element={<RequireAdmin><ManageExpert></ManageExpert></RequireAdmin>}></Route>
 
 
 
 {/* <Route path="addSProduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route> */}


        </Route>
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
      
      </Routes>
     

      <ToastContainer />

<Footer></Footer>
    </div>
  );
}

export default App;
