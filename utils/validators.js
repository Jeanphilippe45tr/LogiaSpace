/**
 * Form Validators for LogiaSpace
 * Comprehensive form validation utilities
 * 
 * @module utils/validators
 */

/**
 * Validate form fields
 * @param {HTMLFormElement} form - Form to validate
 * @returns {Object} Validation result { isValid: boolean, errors: Object }
 */
function validateForm(form) {
    const errors = {};
    const formData = new FormData(form);
    
    for (let [name, value] of formData.entries()) {
        const field = form.elements[name];
        if (!field) continue;
        
        // Check if required
        if (field.hasAttribute('required') && !value.trim()) {
            errors[name] = `${getFieldLabel(field)} is required`;
            continue;
        }
        
        // Check type-specific validation
        if (field.type === 'email' && value) {
            if (!validateEmail(value)) {
                errors[name] = 'Please enter a valid email address';
            }
        }
        
        if (field.type === 'tel' && value) {
            if (!validatePhone(value)) {
                errors[name] = 'Please enter a valid phone number';
            }
        }
        
        // Check min length
        if (field.minLength && value.length < field.minLength) {
            errors[name] = `${getFieldLabel(field)} must be at least ${field.minLength} characters`;
        }
        
        // Check max length
        if (field.maxLength && value.length > field.maxLength) {
            errors[name] = `${getFieldLabel(field)} must not exceed ${field.maxLength} characters`;
        }
        
        // Check pattern
        if (field.pattern && value) {
            const regex = new RegExp(`^${field.pattern}$`);
            if (!regex.test(value)) {
                errors[name] = `${getFieldLabel(field)} format is invalid`;
            }
        }
    }
    
    return {
        isValid: Object.keys(errors).length === 0,
        errors: errors
    };
}

/**
 * Get field label from placeholder or name
 * @param {HTMLElement} field - Form field
 * @returns {string} Field label
 */
function getFieldLabel(field) {
    return field.placeholder || field.name || 'Field';
}

/**
 * Display validation errors on form
 * @param {HTMLFormElement} form - Form element
 * @param {Object} errors - Validation errors object
 */
function displayValidationErrors(form, errors) {
    // Clear previous errors
    document.querySelectorAll('.form-error').forEach(el => el.remove());
    document.querySelectorAll('.is-invalid').forEach(el => {
        el.classList.remove('is-invalid');
    });
    
    // Display new errors
    Object.entries(errors).forEach(([fieldName, errorMessage]) => {
        const field = form.elements[fieldName];
        if (!field) return;
        
        field.classList.add('is-invalid');
        
        const errorEl = document.createElement('div');
        errorEl.className = 'form-error text-danger small mt-1';
        errorEl.textContent = errorMessage;
        field.parentElement.appendChild(errorEl);
    });
}

/**
 * Clear validation errors
 * @param {HTMLFormElement} form - Form element
 */
function clearValidationErrors(form) {
    document.querySelectorAll('.form-error').forEach(el => el.remove());
    document.querySelectorAll('.is-invalid').forEach(el => {
        el.classList.remove('is-invalid');
    });
}

/**
 * Validate email
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate phone number
 * @param {string} phone - Phone to validate
 * @returns {boolean} True if valid
 */
function validatePhone(phone) {
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
    return phoneRegex.test(phone);
}

/**
 * Validate URL
 * @param {string} url - URL to validate
 * @returns {boolean} True if valid
 */
function validateUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {Object} { strength: 'weak'|'medium'|'strong', score: 0-3 }
 */
function validatePasswordStrength(password) {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[!@#$%^&*]/.test(password)) score++;
    
    const strengthMap = ['weak', 'weak', 'medium', 'strong'];
    return {
        strength: strengthMap[score],
        score: score
    };
}

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateForm,
        displayValidationErrors,
        clearValidationErrors,
        validateEmail,
        validatePhone,
        validateUrl,
        validatePasswordStrength
    };
}
