class Dropdown {
    constructor(dropdownElement) {
        this.dropdown = dropdownElement;
        this.toggleButton = this.dropdown.querySelector('.dropdown-toggle');
        this.menu = this.dropdown.querySelector('.dropdown-menu');

        this.addListeners();
    }

    addListeners() {
        this.toggleButton.addEventListener('click', () => {
            this.menu.classList.toggle('visible');
        });

        document.addEventListener('click', (event) => {
            if (!this.dropdown.contains(event.target)) {
                this.menu.classList.remove('visible');
            }
        });
    }
}

export default Dropdown;