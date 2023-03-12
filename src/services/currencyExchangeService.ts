import axios from "axios";

export const convertCurrencies = async ( from: string, to: string, amount: number ) => {

    const serviceUrl = "https://api.apilayer.com/fixer/convert?to=" + to + "&from=" + from + "&amount=" + amount;

    let currencyRes = await axios.get(
        serviceUrl, {
            headers: {
                'apikey': 'hG5Geh8ZOBFDs3HpVX0kkHK08uOcePKT'
            }
        }
    );
    
    return currencyRes;
};