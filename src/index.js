import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { refs } from './js/refs';

const DEBOUNCE_DELAY = 300;
fetchCountries().then(data => {
    console.log(data);
})
