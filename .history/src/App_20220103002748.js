import React from 'react';
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom';
=======
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
>>>>>>> 8be12aa70b69f5bcafcb617a4f8b062924c63167
import './App.css';
import Contact from './Pages/Contact/Contact';
import FQA from './Pages/FQA/FQA';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Shop from './Pages/Shop/Shop';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from "./Pages/Login/PrivateRoute";
import Dashboard from "./Dashboard/Dashboard";
import AdminRoute from "./Dashboard/AdminRoute";
=======
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Review from './Pages/Review/Review';


function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/header" element={<Header></Header>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
            <Route path="/Shop" element={<Shop></Shop>}></Route>
            <Route path="/fqa" element={<FQA></FQA>}></Route>
            <Route path="/Login" element={<Login></Login>}></Route>
            <Route path="/Register" element={<Register></Register>}></Route>

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route
                exact
                path="/dashboard"
                element={<Dashboard></Dashboard>}
              ></Route>
              <Route path={""} element={<AdminRoute></AdminRoute>}></Route>

              <Route path={""} element={<PrivateRoute></PrivateRoute>}></Route>
              <Route path={""} element={<AdminRoute></AdminRoute>}></Route>
              <Route path={""} element={<AdminRoute></AdminRoute>}></Route>
              <Route path={""} element={<AdminRoute></AdminRoute>}></Route>
              <Route path={""} element={<PrivateRoute></PrivateRoute>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
