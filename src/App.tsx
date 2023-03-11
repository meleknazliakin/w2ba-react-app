import React, { useEffect } from 'react';
import './App.css';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import useUserStore from './store/userStore';
import Login from "./pages/login/Login";
import Dashboard from './pages/dashboard/Dashboard';
import Balance from './pages/balance/Balance';
import MoneyTransfer from './pages/moneyTransfer/MoneyTransfer';

const App = () => {
  const { user, isAuthentication } = useUserStore((state) => state);
  const { loginControl } = useUserStore();
  useEffect(() => {
    loginControl();
  }, []);

  return (
    <div>
      <Routes>
        {
          isAuthentication ?
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/balance" element={<Balance />} />
              <Route path="/money-transfer" element={<MoneyTransfer />} />
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