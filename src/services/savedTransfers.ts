
export const getSavedTransfers = async ( username: string ) => {
    // this is a mock up of teh saved transfers service
    // it returns initial saved transfers

    const res = {
        status: true,
        data: {
            transfers: [
                {
                    iban: "TR98810090344698137803400022",
                    name: "Rent payment",
                    amount: 12000,
                    currency: "TRY"
                },
                {
                    iban: "TR48460090344694437805010003",
                    name: "Private school fee",
                    amount: 300,
                    currency: "USD"
                }
            ]
        }
    };

    return res;
};