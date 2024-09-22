document.addEventListener('DOMContentLoaded', () => {
    const pokemonImages = document.querySelectorAll('.pics img');
    pokemonImages.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.2)';
            img.style.transition = 'transform 0.3s ease-in-out';
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });
});