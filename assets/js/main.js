// Add to main.js
document.addEventListener('DOMContentLoaded', function() {
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    const loadMoreBtn = document.getElementById('loadMore');
    let currentItems = 9;
    
    // Hide items beyond initial display
    portfolioCards.forEach((card, index) => {
        if (index >= currentItems) {
            card.style.display = 'none';
        }
    });

    loadMoreBtn.addEventListener('click', function() {
        const elementList = [...portfolioCards];
        
        for (let i = currentItems; i < currentItems + 6; i++) {
            if (elementList[i]) {
                elementList[i].style.display = 'block';
                // Add animation delay based on position
                elementList[i].style.animationDelay = `${(i - currentItems) * 0.1}s`;
            }
        }
        
        currentItems += 6;

        // Hide button if all items are shown
        if (currentItems >= elementList.length) {
            loadMoreBtn.classList.add('hidden');
        }
    });
});