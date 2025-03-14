// Store data for calculations
let person = {};
let secondPerson = {};
let compatibilityMatrix = [];

// Wait for the page to load before running any code
document.addEventListener('DOMContentLoaded', function () {
    // Get all the buttons and sections we need
    const btnPersonal = document.getElementById('btnPersonal');
    const btnCompatibility = document.getElementById('btnCompatibility');
    const personalSection = document.getElementById('personalSection');
    const compatibilitySection = document.getElementById('compatibilitySection');
})

// Show personal section by default
personalSection.style.display = 'block';
compatibilitySection.style.display = 'none';

// Set up button clicks to switch between sections
if (btnPersonal && btnCompatibility && personalSection && compatibilitySection) {
    // When Personal Reading button is clicked
    btnPersonal.addEventListener('click', function () {
        // Make Personal button look active
        btnPersonal.classList.add('active');
        btnCompatibility.classList.remove('active');
        // Show personal section and hide compatibility section
        personalSection.style.display = 'block';
        compatibilitySection.style.display = 'none';
        compatibilitySection.classList.add('display-none');
    });

    // When Compatibility button is clicked
    btnCompatibility.addEventListener('click', function () {
        // Make Compatibility button look active
        btnCompatibility.classList.add('active');
        btnPersonal.classList.remove('active');
        // Show compatibility section and hide personal section
        compatibilitySection.style.display = 'block';
        compatibilitySection.classList.remove('display-none');
        personalSection.style.display = 'none';
        personalSection.classList.add('display-none');
    })
}

