document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const resultDisplay = document.getElementById('result');

    generateBtn.addEventListener('click', () => {
        // Add a small animation effect
        resultDisplay.style.transform = 'scale(0.8)';
        resultDisplay.style.opacity = '0.5';

        setTimeout(() => {
            // Generate random number between 1 and 10
            const randomNumber = Math.floor(Math.random() * 10) + 1;

            resultDisplay.textContent = randomNumber;
            resultDisplay.style.transform = 'scale(1)';
            resultDisplay.style.opacity = '1';
        }, 150);
    });
});
