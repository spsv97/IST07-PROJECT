// Import zodiac signs data from astro_explaination.js
import { zodiacSigns } from './astro_explaination.js';

// Enhanced zodiac calculation function
function calculateZodiacSign(birthdate) {
    const date = new Date(birthdate);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    function isDateInRange(date, sign) {
        const { startDate, endDate } = sign;
        
        if (startDate.month === 12 && endDate.month === 1) {
            return (month === 12 && day >= startDate.day) || 
                   (month === 1 && day <= endDate.day);
        }

        if (month === startDate.month) {
            return day >= startDate.day;
        } else if (month === endDate.month) {
            return day <= endDate.day;
        }
        return month > startDate.month && month < endDate.month;
    }

    for (const [key, sign] of Object.entries(zodiacSigns)) {
        if (isDateInRange(date, sign)) {
            return sign;
        }
    }

    return zodiacSigns.capricorn;
}

// Test if script is loading
console.log('Astrology script loaded');

// Function to display results
function displayResults(zodiacSign) {
    const symbolElement = document.querySelector('.zodiac-symbol');
    const traitsElement = document.querySelector('.zodiac-traits');
    
    symbolElement.innerHTML = `
        <h3>${zodiacSign.name} ${zodiacSign.symbol}</h3>
        <p>Element: ${zodiacSign.element}</p>
        <p>Quality: ${zodiacSign.quality}</p>
        <p>Ruler: ${zodiacSign.ruler}</p>
    `;
    
    traitsElement.innerHTML = `
        <p><strong>Personality:</strong> ${zodiacSign.traits.personality}</p>
        <p><strong>Strengths:</strong> ${zodiacSign.traits.strengths}</p>
        <p><strong>Challenges:</strong> ${zodiacSign.traits.challenges}</p>
        <p><strong>Compatible with:</strong> ${zodiacSign.traits.compatibility.join(', ')}</p>
        <p><strong>Lucky Numbers:</strong> ${zodiacSign.traits.luckyNumbers.join(', ')}</p>
        <p><strong>Lucky Colors:</strong> ${zodiacSign.traits.luckyColors.join(', ')}</p>
    `;

    // Show the results container
    document.querySelector('.results-container').classList.remove('display-none');

    // Show initial prediction
    showPrediction('love', zodiacSign);
}

// Function to show predictions
function showPrediction(category, zodiacSign) {
    const predictions = zodiacSign.traits.predictions[category];
    const randomIndex = Math.floor(Math.random() * predictions.length);
    const predictionContent = document.querySelector('.prediction-content');
    predictionContent.textContent = predictions[randomIndex];
}

// Add event listeners when the document loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    
    const form = document.getElementById('astrology-form');
    if (!form) {
        console.error('Form not found!');
        return;
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted');
        
        const birthdate = document.getElementById('astro-date').value;
        if (!birthdate) {
            alert('Please enter your birthdate');
            return;
        }
        
        const zodiacSign = calculateZodiacSign(birthdate);
        console.log('Zodiac sign calculated:', zodiacSign.name);
        
        // Display the results
        const symbolElement = document.querySelector('.zodiac-symbol');
        const traitsElement = document.querySelector('.zodiac-traits');
        
        symbolElement.innerHTML = `
            <h3>${zodiacSign.name} ${zodiacSign.symbol}</h3>
            <p>Element: ${zodiacSign.element}</p>
            <p>Quality: ${zodiacSign.quality}</p>
            <p>Ruler: ${zodiacSign.ruler}</p>
        `;
        
        traitsElement.innerHTML = `
            <p><strong>Personality:</strong> ${zodiacSign.traits.personality}</p>
            <p><strong>Strengths:</strong> ${zodiacSign.traits.strengths}</p>
            <p><strong>Challenges:</strong> ${zodiacSign.traits.challenges}</p>
            <p><strong>Compatible with:</strong> ${zodiacSign.traits.compatibility.join(', ')}</p>
            <p><strong>Lucky Numbers:</strong> ${zodiacSign.traits.luckyNumbers.join(', ')}</p>
            <p><strong>Lucky Colors:</strong> ${zodiacSign.traits.luckyColors.join(', ')}</p>
        `;
        
        // Show initial prediction
        const predictionContent = document.querySelector('.prediction-content');
        const predictions = zodiacSign.traits.predictions.love;
        const randomIndex = Math.floor(Math.random() * predictions.length);
        predictionContent.textContent = predictions[randomIndex];
        
        // Show the results container
        document.querySelector('.results-container').classList.remove('display-none');
        
        // Highlight the love category by default
        document.querySelector('.category[data-category="love"]').classList.add('active');
    });
    
    // Add click handlers for prediction categories
    document.querySelectorAll('.category').forEach(category => {
        category.addEventListener('click', function() {
            const birthdate = document.getElementById('astro-date').value;
            if (!birthdate) return;
            
            const type = this.dataset.category;
            const zodiacSign = calculateZodiacSign(birthdate);
            
            // Select a random prediction for this category
            const predictions = zodiacSign.traits.predictions[type];
            const randomIndex = Math.floor(Math.random() * predictions.length);
            
            // Display the prediction
            document.querySelector('.prediction-content').textContent = predictions[randomIndex];
            
            // Update active category
            document.querySelectorAll('.category').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });
});