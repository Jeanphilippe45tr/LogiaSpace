/**
 * EmailJS Configuration
 * Centralized email service configuration
 * 
 * @module api/emailjs-config
 */

const EmailConfig = {
    serviceId: 'service_pqkrjdr',
    templateId: 'template_4b2gd6j',
    publicKey: '2fXu2otH1u0yawt3l'
};

const FormSelectors = {
    QUOTE: '#quoteForm',
    CONTACT: '#contactForm',
    NEWSLETTER: '#newsletterForm'
};

const AlertMessages = {
    SUCCESS: '✅ Message sent successfully!',
    QUOTE_SUCCESS: '✅ Quote request submitted successfully!',
    ERROR: '❌ Error: '
};

/**
 * Initialize EmailJS with public key
 * Must be called before using EmailJS
 */
function initializeEmailJS() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EmailConfig.publicKey);
        console.log('EmailJS initialized successfully');
    } else {
        console.error('EmailJS library not loaded. Make sure to include the EmailJS script.');
    }
}

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EmailConfig, FormSelectors, AlertMessages, initializeEmailJS };
}
