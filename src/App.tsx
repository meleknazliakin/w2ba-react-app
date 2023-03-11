import React, { useEffect } from 'react';
import './App.css';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import useUserStore from './store/userStore';
import Login from "./pages/login/Login";
import Dashboard from './pages/dashboard/Dashboard';

const App = () => {
  const { user, isAuthentication } = useUserStore((state) => state);
  const { loginControl } = useUserStore();
  useEffect(() => {
    loginControl();
    console.log(user);
  }, []);


  return (
    <div>
      <Routes>
        {
          isAuthentication ?
            <>
              <Route path="/" element={<Dashboard />} />
            </>
            :
            <Route path="/" element={<Login />} />
        }
      </Routes>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

export default App;