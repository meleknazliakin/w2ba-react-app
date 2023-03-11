import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './style.module.scss';

const Navigation = () => {
  return (
    <div className={Styles.NavigationContainer}>
      <Link className={Styles.navItem} to={'/dashboard'}>Dashboard</Link>
      <Link className={Styles.navItem} to={'/money-transfer'}>Money Transfer</Link>
      <Link className={Styles.navItem} to={'/balance'}>Balance</Link>
    </div>
  );
};

export default Navigation;