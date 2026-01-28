// Initialize EmailJS with your public key
(function() {
    emailjs.init("2fXu2otH1u0yawt3l");
})();

// Quote Form Handler (for both index.html and quote.html)
document.getElementById('quoteForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Send form using EmailJS
    emailjs.sendForm('service_pqkrjdr', 'template_7iy2rlb', this)
        .then(function() {
            alert('Quote request sent successfully! We will contact you soon.');
            document.getElementById('quoteForm').reset(); // Reset form after sending
        }, function(error) {
            alert('Oops! Something went wrong. Please try again.');
            console.error('EmailJS Error:', error);
        });
});

// Contact Form Handler (for contact.html)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Send form using EmailJS
    emailjs.sendForm('service_pqkrjdr', 'template_7iy2rlb', this)
        .then(function() {
            alert('Message sent successfully! We will contact you soon.');
            document.getElementById('contact-form').reset(); // Reset form after sending
        }, function(error) {
            alert('Oops! Something went wrong. Please try again.');
            console.error('EmailJS Error:', error);
        });
});

