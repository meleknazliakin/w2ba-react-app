import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './style.module.scss';

const BalanceCard = () => {
  return (
    <div className={Styles.BalanceContainer}>
      
      <div className={Styles.balance}>Your Balance: <span>2500TL</span></div>
      <div className={Styles.balance}>Last Update date: <span>23/02/12</span></div>
      <Link className={Styles.button} to={'/balance'}>Load to Wallet</Link>

    </div>
  );
};

export default BalanceCard;