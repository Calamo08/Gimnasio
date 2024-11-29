// JavaScript for side menu toggle
const sideBars = document.getElementById('side-bars');
const sideMenu = document.getElementById('side-menu');

// Create overlay element
const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

sideBars.addEventListener('click', () => {
    // Toggle the side menu
    sideMenu.classList.toggle('active');
    
    // Toggle the overlay
    overlay.classList.toggle('active');
    
    // Change the icon
    if (sideBars.classList.contains('active')) {
        sideBars.classList.remove('active');
        sideBars.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
        sideBars.classList.add('active');
        sideBars.innerHTML = '<i class="fa-solid fa-times"></i>';
    }
});

// Close menu when clicking on overlay
overlay.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
    sideBars.classList.remove('active');
    sideBars.innerHTML = '<i class="fa-solid fa-bars"></i>';
});
