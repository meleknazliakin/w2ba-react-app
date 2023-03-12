
export interface ISavedTransfersState {
    transfers: ITransferModel[]
}

export interface ITransferModel {
    iban: string,
    name: string,
    amount: number,
    currency: string
}

export interface ISavedTransfersActions  {
    addSavedTransfer: (data: any) => void,
    fillSavedTransfersFromDb: (username: any) => any
}