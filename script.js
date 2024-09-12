const birthDateInput = document.getElementById('birth-date');
const calculateBtn = document.getElementById('calculate-btn');
const ageResult = document.getElementById('age-result');

calculateBtn.addEventListener('click', calculateAge);

function calculateAge(e) {
    e.preventDefault();
    const birthDate = new Date(birthDateInput.value);
    const today = new Date();
    const age = calculateAgeInYears(birthDate, today);
    ageResult.textContent = `You are ${age} years old.`;
}

function calculateAgeInYears(birthDate, today) {
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}