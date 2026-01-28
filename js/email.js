// // Initialize EmailJS with your public key
// (function() {
//     emailjs.init("2fXu2otH1u0yawt3l");
// })();

// // Quote Form Handler (for both index.html and quote.html)
// document.getElementById('quoteForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent default form submission

//     // Send form using EmailJS
//     emailjs.sendForm('service_pqkrjdr', 'template_7iy2rlb', this)
//         .then(function() {
//             alert('Quote request sent successfully! We will contact you soon.');
//             document.getElementById('quoteForm').reset(); // Reset form after sending
//         }, function(error) {
//             alert('Oops! Something went wrong. Please try again.');
//             console.error('EmailJS Error:', error);
//         });
// });

// // Contact Form Handler (for contact.html)
// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent default form submission

//     // Send form using EmailJS
//     emailjs.sendForm('service_pqkrjdr', 'template_7iy2rlb', this)
//         .then(function() {
//             alert('Message sent successfully! We will contact you soon.');
//             document.getElementById('contact-form').reset(); // Reset form after sending
//         }, function(error) {
//             alert('Oops! Something went wrong. Please try again.');
//             console.error('EmailJS Error:', error);
//         });
// });

// // Newsletter Form Handler (for all pages with footer newsletter)
// document.getElementById('newsletterForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent default form submission

//     // Get the email value
//     var emailInput = this.querySelector('input[type="text"], input[type="email"]');
//     var email = emailInput.value;

//     // Send using EmailJS with same template as other forms
//     emailjs.send('service_pqkrjdr', 'template_7iy2rlb', {
//         from_email: email,
//         message: 'Newsletter subscription request'
//     })
//     .then(function() {
//         alert('Thank you for subscribing to our newsletter!');
//         document.getElementById('newsletterForm').reset(); // Reset form after sending
//     }, function(error) {
//         alert('Oops! Something went wrong. Please try again.');
//         console.error('EmailJS Error:', error);
//     });
// });


document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_pqkrjdr",       
        "template_4b2gd6j",      
        this
    )
    .then(() => {
        alert("Message sent successfully!");
        this.reset();
    })
    .catch(error => {
        alert("Error: " + error.text);
    });
});

