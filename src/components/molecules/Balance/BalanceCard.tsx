import React from 'react';
import { Link } from 'react-router-dom';
import useBalanceStore from "../../../store/balanceStore";
import Styles from './style.module.scss';

const BalanceCard = ({ viewBtn }) => {
  const { amount } = useBalanceStore((state) => state);

    return (
    <div className={Styles.BalanceContainer}>
      <div className={Styles.balance}>Your Balance: <span>{amount} TL</span></div>
      <div className={Styles.balance}>Last Update date: <span>23/02/12</span></div>
      {viewBtn && <Link className={Styles.button} to={'/balance'}>Load to Wallet</Link>}
    </div>
  );
};

export default BalanceCard;

