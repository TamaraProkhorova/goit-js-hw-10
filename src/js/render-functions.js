import { refs } from "./refs";

export function clearCountryList(){
refs.countryList.innerHTML = '';
}

export function clearCountryInfo(){
refs.countryInfo.innerHTML = ''; 
}

export function renderCountryList (countries){
    return countries.map(({flags, name}) => {
      const markup = `<li class="country-item">
      <img src="${flags.svg}" alt="${name.common}" width=100/>
      <p>${name.common}</p>
      <li/>`
      .join(' ');
      refs.countryList.insertAdjacentHTML("beforeend", markup);
    });
}

