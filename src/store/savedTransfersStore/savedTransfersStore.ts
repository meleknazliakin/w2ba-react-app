import { create } from 'zustand';

import { ISavedTransfersState, ITransferModel, ISavedTransfersActions } from './models';
import { getSavedTransfers } from "../../services/savedTransfers";

const localStorageTransferData = localStorage.getItem("savedTransfersStore");

const initialState: ISavedTransfersState = {
    transfers: localStorageTransferData ? JSON.parse(localStorageTransferData) : []
};

const useSavedTransfersStore = create<ISavedTransfersState & ISavedTransfersActions>()((set, get) => ({
    ...initialState,

    fillSavedTransfersFromDb: async ( username: string ) => {
        const savedTransfersResponse = await getSavedTransfers(username);
        if(savedTransfersResponse.status) {
            let initialTransfers : any = [];
            savedTransfersResponse.data.transfers.forEach(transfer => {
                initialTransfers.push(transfer);
                set( { transfers: initialTransfers });
                localStorage.setItem("savedTransfers", JSON.stringify(get().transfers));
            });
        }
    },

    addSavedTransfer: async (data: { iban: string, name: string, amount: number, currency: string }) => {
        get().transfers.push(data);
        set(get());
        localStorage.setItem("savedTransfers", JSON.stringify(get().transfers));
    },
}));

export default useSavedTransfersStore;