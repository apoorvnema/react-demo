import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const loggedIn = localStorage.getItem('isLoggedIn');
    if(loggedIn=='1'){
      setIsLoggedIn(true);
    }
    else{
      setIsLoggedIn(false);
    }
  },[])

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn','1');
  };

  const logoutHandler = () => {
    localStorage.setItem('isLoggedIn','0');
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;