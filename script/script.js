let person = {};
let secondPerson = {};
let compatibilityMatrix = [];

document.addEventListener('DOMContentLoaded', function () {
    const btnPersonal = document.getElementById('btnPersonal');
    const btnCompatibility = document.getElementById('btnCompatibility');
    const personalSection = document.getElementById('personalSection');
    const compatibilitySection = document.getElementById('compatibilitySection');
})


personalSection.style.display = 'block';
compatibilitySection.style.display = 'none';

if (btnPersonal && btnCompatibility && personalSection && compatibilitySection) {
    btnPersonal.addEventListener('click', function () {
        btnPersonal.classList.add('active');
        btnCompatibility.classList.remove('active');
        personalSection.style.display = 'block';
        compatibilitySection.style.display = 'none';
        compatibilitySection.classList.add('display-none');
    });
    btnCompatibility.addEventListener('click', function () {
        btnCompatibility.classList.add('active');
        btnPersonal.classList.remove('active');
        compatibilitySection.style.display = 'block';
        compatibilitySection.classList.remove('display-none');
        personalSection.style.display = 'none';
        personalSection.classList.add('display-none');
    })
}

if (personalSection) {
    personalSection.style.display = 'block';
    personalSection.classList.remove('display-none');

}
