import React from 'react';
import BalanceCard from '../../components/molecules/Balance/BalanceCard';
import LastTransfer from '../../components/molecules/LastTransfer';
import SavedTransfer from '../../components/molecules/SavedTransfer';
import { AuthLayout } from '../../components/organisms/Layouts';
import Styles from './styles.module.scss';


const Dashboard = () => {
  return (
    <AuthLayout>
      <div className={Styles.DashboardContainer}>
        <div className={Styles.transfers}>
          <LastTransfer />
          <SavedTransfer />
        </div>
        <BalanceCard />
      </div>
    </AuthLayout>
  );
};

export default Dashboard;