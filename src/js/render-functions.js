import { refs } from "./refs";

export function clearCountryList(){
refs.countryList.innerHTML = '';
}

export function clearCountryInfo(){
refs.countryInfo.innerHTML = ''; 
}

export function renderCountryList (country){
 const markup = country
 .map(({flags, name}) => {
      return `<li class="list-item">
      <img src="${flags.svg}" alt="${name.common}" width=60/>
      <h2>${name.common}</h2>
      <li/>`
    })
      .join('');
   
      refs.countryList.innerHTML = markup;
    }

    export function renderCountryInfo (country){
      const markup = country
      .map(({name,capital,population,flags,languages }) => {
      return `<li class="list-item">
      <img src="${flags.svg}" alt="${name.common}" width=60/>
      <h1>${name.common}</h1>
      </li>
      <div>
      <p>Capital: ${capital}</p>
        <p>Population: ${population}</p>
        <p>Languages: ${Object.values(languages).join(',')}</p>
      <div>`;
    })
      .join('');
   
      refs.countryInfo.innerHTML = markup;
    }
