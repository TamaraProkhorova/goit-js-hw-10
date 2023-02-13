import debounce from 'lodash.debounce';
import {Notify} from 'notiflix';
import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { refs } from './js/refs';
import { clearCountryList, clearCountryInfo, renderCountryList, renderCountryInfo} from './js/render-functions';

const DEBOUNCE_DELAY = 300;
refs.input.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));

function onInputSearch(event){
    event.preventDefault();
    const inputValue = event.target.value.trim();
    if (!inputValue) {
        clearCountryInfo();
        clearCountryList();
        return;
    }

    fetchCountries(inputValue)
    .then(countries => {
        if (countries.length > 10 ) {
            clearCountryInfo();
            clearCountryList();
            Notify.info('Too many matches found. Please enter a more specific name');
        }
        if (countries.length >= 2 && countries.length <= 10) {
            clearCountryInfo();
            // Notify.success('Hooray! We drow countries list');
            renderCountryList(countries);
        }
        if (countries.length === 1) {
            clearCountryList();
            renderCountryInfo(countries);
            // Notify.success('This is your country!');
        }
        console.log(countries);
    }).catch(error => {
        clearCountryInfo();
        clearCountryList();
        Notify.failure('Oops, there is no country with that name');
        console.log(error);
    })
}




