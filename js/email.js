/**
 * EmailJS Configuration
 * Centralized configuration for EmailJS service
 */
const EmailConfig = {
    serviceId: 'service_pqkrjdr',
    templateId: 'template_4b2gd6j',
    publicKey: '2fXu2otH1u0yawt3l'
};

/**
 * Form Selector Constants
 * Centralized form element selectors
 */
const FormSelectors = {
    QUOTE: '#quoteForm',
    CONTACT: '#contactForm',
    NEWSLETTER: '#newsletterForm'
};

/**
 * Alert Messages
 * Centralized user feedback messages
 */
const AlertMessages = {
    SUCCESS: 'Message sent successfully!',
    ERROR: 'Error: ',
    QUOTE_SUCCESS: 'Quote request sent successfully! We will contact you soon.',
    NEWSLETTER_SUCCESS: 'Thank you for subscribing to our newsletter!'
};

/**
 * Initialize EmailJS
 * Sets up EmailJS with the configured public key
 */
function initializeEmailJS() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EmailConfig.publicKey);
    }
}

/**
 * Handle form submission
 * Centralized handler for all form submissions
 * @param {Event} event - The form submit event
 * @param {string} successMessage - Custom success message
 */
function handleFormSubmit(event, successMessage) {
    event.preventDefault();
    const form = event.target;

    emailjs.sendForm(EmailConfig.serviceId, EmailConfig.templateId, form)
        .then(() => {
            showSuccessAlert(successMessage);
            form.reset();
        })
        .catch(handleError);
}

/**
 * Show success alert
 * @param {string} message - The success message to display
 */
function showSuccessAlert(message) {
    alert(message);
}

/**
 * Handle errors
 * Centralized error handling
 * @param {Object} error - The error object from EmailJS
 */
function handleError(error) {
    const errorMessage = error.text || 'Something went wrong. Please try again.';
    alert(`${AlertMessages.ERROR}${errorMessage}`);
    console.error('EmailJS Error:', error);
}

/**
 * Initialize all form handlers
 * Sets up event listeners for all forms on the page
 */
function initializeFormHandlers() {
    // Quote Form
    const quoteForm = document.querySelector(FormSelectors.QUOTE);
    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => 
            handleFormSubmit(e, AlertMessages.QUOTE_SUCCESS)
        );
    }

    // Contact Form
    const contactForm = document.querySelector(FormSelectors.CONTACT);
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => 
            handleFormSubmit(e, AlertMessages.SUCCESS)
        );
    }

    // Newsletter Form
    const newsletterForm = document.querySelector(FormSelectors.NEWSLETTER);
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
}

/**
 * Handle newsletter form submission
 * Specialized handler for newsletter subscriptions
 * @param {Event} event - The form submit event
 */
function handleNewsletterSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const emailInput = form.querySelector('input[name="from_email"]');
    
    if (!emailInput || !emailInput.value) {
        alert('Please enter your email address.');
        return;
    }

    emailjs.send(EmailConfig.serviceId, EmailConfig.templateId, {
        from_email: emailInput.value,
        message: 'Newsletter subscription request'
    })
    .then(() => {
        showSuccessAlert(AlertMessages.NEWSLETTER_SUCCESS);
        form.reset();
    })
    .catch(handleError);
}

/**
 * Initialize application
 * Main entry point - runs when DOM is ready
 */
function initialize() {
    initializeEmailJS();
    initializeFormHandlers();
}

// Run initialization when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
} else {
    initialize();
}

