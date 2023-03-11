import React from 'react';
import BalanceCard from '../../components/molecules/Balance/BalanceCard';
import LastTransfer from '../../components/molecules/LastTransfer';
import SavedTransfer from '../../components/molecules/SavedTransfer';
import { AuthLayout } from '../../components/organisms/Layouts';
import DashboardTemplate from '../../components/templates/DashboardTemplate/DashboardTemplate';
import Styles from './styles.module.scss';


const Dashboard = () => {
  return (
    <AuthLayout>
     <DashboardTemplate/>
    </AuthLayout>
  );
};

export default Dashboard;