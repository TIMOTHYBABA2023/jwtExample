// import './App.css';
// import Home from "./components/home";
// import Admin from "./components/admin";
//
// export default function App() {
//   return (
//     <div className="App">
//         <Home />
//         <Admin />
//     </div>
//   );
// }

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/home';
import Admin from './components/admin';
import Login from './components/login';
import PrivateRoute from './components/privateroute';
export default function App(){

        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/admin"
                        element={
                            <PrivateRoute roles={['ROLE_ADMIN']}>
                                <Admin />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </Router>
        );
}
