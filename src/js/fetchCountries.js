const URL = 'https://restcountries.com/v3.1/name/';
const serchParams = 'fields=name,capital,population,flafs,languages';

export function fetchCountries(name){
    return fetch (`${URL}peru?${serchParams}`).then(response => {
        console.log(response);
            if (!response.ok) {
              throw new Error(response.status);
            }
            return response.json();
          })
}

