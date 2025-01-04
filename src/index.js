import './style.css';
import Dropdown from './dropdown.js';

document.addEventListener('DOMContentLoaded', () => {
    const dropdownElements = document.querySelectorAll('.dropdown');
    dropdownElements.forEach((dropdown) => new Dropdown(dropdown));
});