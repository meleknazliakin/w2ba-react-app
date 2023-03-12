
export interface IBalanceState {
    amount: number,
    lastUpdate: string,
    currency: string
}

export interface IBalanceActions  {
    updateBalance: (data: any) => void
}