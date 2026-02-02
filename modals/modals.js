/**
 * Modals and Dialogs Module
 * Centralized modal management for the application
 * 
 * @module modals/modals
 */

/**
 * Show confirmation modal
 * @param {string} message - Message to display
 * @param {Function} onConfirm - Callback when confirmed
 */
function showConfirmModal(message, onConfirm) {
    const modal = document.getElementById('confirmModal');
    const messageEl = document.getElementById('confirmMessage');
    const confirmBtn = document.getElementById('confirmBtn');
    
    messageEl.textContent = message;
    confirmBtn.onclick = () => {
        onConfirm();
        bootstrap.Modal.getInstance(modal).hide();
    };
    
    new bootstrap.Modal(modal).show();
}

/**
 * Show alert modal
 * @param {string} title - Modal title
 * @param {string} message - Message to display
 */
function showAlertModal(title, message) {
    const modal = document.getElementById('alertModal');
    const titleEl = document.getElementById('alertLabel');
    const messageEl = document.getElementById('alertMessage');
    
    titleEl.textContent = title;
    messageEl.textContent = message;
    
    new bootstrap.Modal(modal).show();
}

/**
 * Show success modal
 * @param {string} title - Modal title
 * @param {string} message - Message to display
 */
function showSuccessModal(title, message) {
    const modal = document.getElementById('successModal');
    const titleEl = document.getElementById('successLabel');
    const messageEl = document.getElementById('successMessage');

    if(titleEl) titleEl.textContent = title;
    if(messageEl) messageEl.textContent = message;

    new bootstrap.Modal(modal).show();
}

/**
 * Show error modal
 * @param {string} title - Modal title
 * @param {string} message - Message to display
 */
function showErrorModal(title, message) {
    const modal = document.getElementById('errorModal');
    const titleEl = document.getElementById('errorLabel');
    const messageEl = document.getElementById('errorMessage');

    if(titleEl) titleEl.textContent = title;
    if(messageEl) messageEl.textContent = message;
    
    new bootstrap.Modal(modal).show();
}


/**
 * Show loading modal
 * @param {string} message - Loading message
 * @returns {Object} Modal instance for closing later
 */
function showLoadingModal(message = 'Loading...') {
    const modal = document.getElementById('loadingModal');
    const labelEl = document.getElementById('loadingLabel');
    
    labelEl.textContent = message;
    
    return new bootstrap.Modal(modal);
}

/**
 * Hide loading modal
 */
function hideLoadingModal() {
    const modal = document.getElementById('loadingModal');
    const instance = bootstrap.Modal.getInstance(modal);
    if (instance) {
        instance.hide();
    }
}

/**
 * Show search modal
 */
function showSearchModal() {
    const modal = document.getElementById('searchModal');
    const input = modal.querySelector('input[type="text"]');
    new bootstrap.Modal(modal).show();
    setTimeout(() => input.focus(), 100);
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showConfirmModal,
        showAlertModal,
        showSuccessModal,
        showErrorModal,
        showLoadingModal,
        hideLoadingModal,
        showSearchModal
    };
}
