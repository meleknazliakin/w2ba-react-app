import React from "react";
import { AuthLayout } from "../../components/organisms/Layouts";
import BalanceCard from '../../components/molecules/Balance/BalanceCard';
import BalanceTemplate from "../../components/templates/BalanceTemplate";

const Balance = () =>
    <AuthLayout>
        <BalanceTemplate />
    </AuthLayout>;

export default Balance;
