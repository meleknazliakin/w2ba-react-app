
export const getLastTransfers = ( username: string ) => {
    // this is a mock up of teh saved transfers service
    // it returns initial last transfers

    const res = {
        status: true,
        data: {
            transfers: [
                {
                    iban: "TR760009901234567800100001",
                    date: "07/01/2023",
                    amount: 125,
                    currency: "TRY"
                },
                {
                    iban: "TR951009654134567803400008",
                    date: "12/02/2023",
                    amount: 44,
                    currency: "USD"
                }
            ]
        }
    };

    return res;
};