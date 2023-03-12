import axios from "axios";

export const convertCurrencies = async ( from: string, to: string, amount: number ) => {
    var exchangeHeaders = new Headers();
    exchangeHeaders.append("apikey", "hG5Geh8ZOBFDs3HpVX0kkHK08uOcePKT");

    var requestOptions : RequestInit = {
        method: 'GET',
        redirect: 'follow',
        headers: exchangeHeaders
    };

    const serviceUrl = "https://api.apilayer.com/fixer/convert?to=" + to + "&from=" + from + "&amount=" + amount;
    const response = await fetch(serviceUrl, requestOptions);
    const res = await response.json();

    return res;
};