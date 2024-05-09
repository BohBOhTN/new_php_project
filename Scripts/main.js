document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.querySelector('.grid-container');

    // Add event listeners for horizontal scrolling
    gridContainer.addEventListener('wheel', function(event) {
        if (event.deltaY !== 0) {
            // Scroll left or right based on wheel direction
            gridContainer.scrollLeft += event.deltaY;
            event.preventDefault(); // Prevent default vertical scrolling
        }
    });
});
