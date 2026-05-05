document.addEventListener('DOMContentLoaded', function() {
    // 1. Sélection des éléments
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    // 2. Fonction pour générer une couleur aléatoire (Hexadécimal)
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // 3. Ajout de l'écouteur d'événement au clic
    changeColorBtn.addEventListener('click', function() {
        // On change la propriété de style du background-color
        const newColor = getRandomColor();
        colorBox.style.backgroundColor = newColor;
    });
});
