import { create } from 'zustand';

import { ILastTransfersState, ILastTransfersActions } from './models';
import { getLastTransfers } from "../../services/lastTransfersService";

const localStorageTransferData = localStorage.getItem("lastTransfers");

const initialState: ILastTransfersState = {
    transfers: localStorageTransferData ? JSON.parse(localStorageTransferData) : []
};

const useLastTransfersStore = create<ILastTransfersState & ILastTransfersActions>()((set, get) => ({
    ...initialState,

    fillLastTransfersFromDb: async ( username: string ) => {
        const lastTransfersResponse = await getLastTransfers(username);
        if(lastTransfersResponse.status) {
            let initialTransfers : any = [];
            lastTransfersResponse.data.transfers.forEach(transfer => {
                initialTransfers.push(transfer);
                set({ transfers : initialTransfers });
                localStorage.setItem("lastTransfers", JSON.stringify(get().transfers));
            });
        }
    },

    addTransfer: async (data: { iban: string, date: string, amount: number, currency: string }) => {
        get().transfers.push(data);
        set(get());
        localStorage.setItem("lastTransfers", JSON.stringify(get().transfers));
    },
}));

export default useLastTransfersStore;