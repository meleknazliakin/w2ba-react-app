
export interface ILastTransfersState {
    transfers: ITransferModel[]
}

export interface ITransferModel {
    iban: string,
    date: string,
    amount: number,
    currency: string
}

export interface ILastTransfersActions  {
    addTransfer: (data: any) => void,
    fillLastTransfersFromDb: (username: any) => any
}