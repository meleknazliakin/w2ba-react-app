import React from 'react';
import BalanceCard from '../../molecules/Balance';
import LastTransfer from '../../molecules/LastTransfer';
import SavedTransfer from '../../molecules/SavedTransfer';
import Styles from './styles.module.scss';

const DashboardTemplate = () => {
  return (
    <div className={Styles.DashboardContainer}>
      <div className={Styles.transfers}>
        <LastTransfer />
        <SavedTransfer />
      </div>
      <BalanceCard viewBtn={true} />
    </div>
  );
};

export default DashboardTemplate;