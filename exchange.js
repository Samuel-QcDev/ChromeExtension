document.addEventListener('DOMContentLoaded',function(){
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const convert = document.getElementById('convert');
const result = document.getElementById('result');
const amountForeign = document.getElementById('amountForeign');
const currencyForeign = document.getElementById('currencyForeign');
const convertForeign = document.getElementById('convertForeign');
const reslutForeign = document.getElementById('resultForeign');
const Country = document.getElementById('Country');
const CountryForeign = document.getElementById('CountryForeign');
let CountryName, CName = "";
let CountryNameForeign = "";

const apiKey="T6Pda0ujqwUkLxicqFwA7A==DhGAu13g9BYZTnFq"
const apiUrl="https://api.api-ninjas.com/v1/exchangerate?pair=CAD_"
const apiUrlForeign="https://api.api-ninjas.com/v1/exchangerate?pair="

function CountryNAME (currencyname){
    switch(currencyname) {
        case 'EUR':
            CountryName= 'European Union';
            break;
        case 'USD' :
            CountryName = 'USA';
            break;
        case 'JPY' :
            CountryName = 'Japan';
            break;
        case 'GBP':
            CountryName = 'Great Britain';
            break;
        case 'AUD' :
            CountryName = 'Australia';
            break;
        case 'CNY' :
            CountryName = 'China';
            break;
        case 'HKD' :
            CountryName = 'Hong Kong';
            break;
        case 'MXN' :
            CountryName = 'Mexico';
            break;
    }
}

currency.addEventListener('change', () => {
    convert.innerHTML='Convert to ' + currency.value;
    CountryNAME(currency.value);
    Country.innerHTML='Country: ' + CountryName;
})
convert.addEventListener('click', () =>{
    const amountTotal = amount.value;
    const currencyTotal = currency.value;
    const url = apiUrl + currencyTotal;
    console.log(currencyTotal);

    fetch(url, {
        headers: {
            'X-API-KEY':apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const rate = data.exchange_rate;
        const resultPrice = amountTotal * rate;
        console.log(amountTotal,currencyTotal, rate)
        result.innerHTML = `${amountTotal} CAD = ${resultPrice.toFixed(2)} ${currencyTotal}`;

    }).catch(error =>{
        console.error('Request failed:', error);
        result.innerHTML = 'An error occured please try again later.'
    })
})
currencyForeign.addEventListener('change', () => {
        convertForeign.innerHTML='Convert from ' + currencyForeign.value;
        CountryNAME(currencyForeign.value);
        CountryForeign.innerHTML='Country: ' + CountryName;
})
convertForeign.addEventListener('click', () =>{
    const amountTotalForeign = amountForeign.value;
    const currencyTotalForeign = currencyForeign.value;
    const UrlForeign = apiUrlForeign + currencyTotalForeign + '_CAD';

    console.log(currencyTotalForeign);

    fetch(UrlForeign, {
        headers: {
            'X-API-KEY':apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const rate = data.exchange_rate;
        const resultPriceForeign = amountTotalForeign * rate;
        console.log(UrlForeign, amountTotalForeign,currencyTotalForeign, rate)
        reslutForeign.innerHTML = `${amountTotalForeign} ${currencyTotalForeign} = ${resultPriceForeign.toFixed(2)}CAD`;

    }).catch(error =>{
        console.error('Request failed:', error);
        reslutForeign.innerHTML = 'An error occured please try again later.'
    })
})
})