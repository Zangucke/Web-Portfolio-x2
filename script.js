document.getElementById('menu-toggle').addEventListener('click', function() {
    const sideMenu = document.getElementById('side-menu');
    const isMenuOpen = sideMenu.classList.contains('open');

    // Toggle open class for the side menu
    if (isMenuOpen) {
        sideMenu.classList.remove('open');
        this.textContent = '▶'; // Update arrow to point right
    } else {
        sideMenu.classList.add('open');
        this.textContent = '◀'; // Update arrow to point left
    }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Reset form fields
    event.target.reset();
});
