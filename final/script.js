// Get all the images with draggable attribute
const images = document.querySelectorAll('.gallery-item img');

// Loop through each image and add event listeners
images.forEach(image => {
    // When dragging starts
    image.addEventListener('dragstart', (event) => {
        // Store the image source in the dataTransfer object
        event.dataTransfer.setData('text', event.target.src);
        // Optionally, add a class to style the dragged image (e.g., for visual feedback)
        event.target.classList.add('draggable');
    });

    // When dragging ends
    image.addEventListener('dragend', (event) => {
        // Remove the dragging class after the drag ends
        event.target.classList.remove('dragging');
    });
});

// Optional: You can implement custom behavior for where the image can be dropped
const galleryContainer = document.querySelector('.gallery-container');

// Add an event listener to handle the drop
galleryContainer.addEventListener('dragover', (event) => {
    event.preventDefault(); // Allow the drop by preventing the default behavior
});

// Handle the actual drop event
galleryContainer.addEventListener('drop', (event) => {
    event.preventDefault();
    const draggedImageSrc = event.dataTransfer.getData('text');
    const draggedImage = document.querySelector(`img[src="${draggedImageSrc}"]`);

    // You can perform any action here, like changing the order of the images or showing a message
    // Example: Move the dragged image to the end of the gallery container
    galleryContainer.appendChild(draggedImage);
});
