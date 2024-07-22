// import React from 'react';
//
// export default function Login(){
//   const handleLogin = (role) => {
//     localStorage.setItem('role', role);
//     window.location.href = '/';
//   };
//
//   return (
//     <div>
//       <h1>Login Page</h1>
//       <button onClick={() => handleLogin('ROLE_USER')}>Login as User</button>
//       <button onClick={() => handleLogin('ROLE_ADMIN')}>Login as Admin</button>
//     </div>
//   );
//
// }

import React, { useState } from 'react';
import authService from './../services/authservice';
import { useNavigate } from 'react-router-dom';

export default function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await authService.login(username, password);
            navigate('/');
        } catch (error) {
            console.error('There was an error logging in!', error);
        }
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}



