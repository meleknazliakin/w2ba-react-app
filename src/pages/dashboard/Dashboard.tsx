import React from 'react';
import { AuthLayout } from '../../components/organisms/Layouts';
import DashboardTemplate from '../../components/templates/DashboardTemplate/DashboardTemplate';

const Dashboard = () => {
  return (
    <AuthLayout>
     <DashboardTemplate/>
    </AuthLayout>
  );
};

export default Dashboard;