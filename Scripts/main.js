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

// Function to navigate back to index.html when the back arrow is clicked
function goBackToIndex() {
    window.location.href = 'index.html'; // Change 'index.html' if needed
}

// Function to open the modal
function openPopup(event) {
    event.preventDefault(); // Prevent the default link behavior
    const popupModal = document.getElementById('popupModal');
    if (popupModal) { // Ensure the element exists
        popupModal.style.display = 'block'; // Display the modal
    } else {
        console.error("popupModal element not found.");
    }
}

// Function to close the modal
function closePopup() {
    const popupModal = document.getElementById('popupModal');
    if (popupModal) { // Ensure the element exists
        popupModal.style.display = 'none'; // Hide the modal
    }
}
