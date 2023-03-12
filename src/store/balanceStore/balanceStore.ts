import { create } from 'zustand';

import { IBalanceState, IBalanceActions } from './models';

const localStorageBalanceData = localStorage.getItem("balance");

const initialState: IBalanceState = localStorageBalanceData ? JSON.parse(localStorageBalanceData) : {
    amount: 100,
    lastUpdate: '',
    currency: 'TRY'
};

const useBalanceStore = create<IBalanceState & IBalanceActions>()((set, get) => ({
    ...initialState,

    updateBalance: async (data: { newAmount: number }) => {
        get().amount = data.newAmount;
        set(get());
        localStorage.setItem("balance", JSON.stringify(get()));
    },
}));

export default useBalanceStore;