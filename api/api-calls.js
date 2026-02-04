/**
 * API Endpoints and Calls Configuration
 * Centralize all API communication in this module
 * 
 * @module api/api-calls
 */

/**
 * API Base Configuration
 * Update these values when deploying to different environments
 */
const APIConfig = {
    baseURL: '',  // Set to your API base URL if using backend
    timeout: 10000,  // Request timeout in ms
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
};

function withBasePath(path) {
    const basePath = (typeof window !== 'undefined' && window.LOGIA_BASE_PATH) || '';
    if (!basePath) return path;
    const normalizedBase = basePath.replace(/\/+$/, '');
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${normalizedBase}${normalizedPath}`;
}

/**
 * Email API Calls using EmailJS
 * See api/emailjs-config.js for configuration
 */

/**
 * Submit Quote Form
 * @param {Object} formData - Form data object
 * @returns {Promise} EmailJS result
 */
async function submitQuoteForm(formData) {
    try {
        const result = await emailjs.send(
            EmailConfig.serviceId,
            EmailConfig.templateId,
            {
                user_name: formData.user_name,
                user_email: formData.user_email,
                service: formData.service,
                message: formData.message
            },
            EmailConfig.publicKey
        );
        return { success: true, data: result };
    } catch (error) {
        console.error('Quote form error:', error);
        return { success: false, error: error.message };
    }
}

/**
 * Submit Contact Form
 * @param {Object} formData - Form data object
 * @returns {Promise} EmailJS result
 */
async function submitContactForm(formData) {
    try {
        const result = await emailjs.send(
            EmailConfig.serviceId,
            EmailConfig.templateId,
            {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message
            },
            EmailConfig.publicKey
        );
        return { success: true, data: result };
    } catch (error) {
        console.error('Contact form error:', error);
        return { success: false, error: error.message };
    }
}

/**
 * Subscribe Newsletter
 * @param {string} email - Subscriber email
 * @returns {Promise} Result
 */
async function subscribeNewsletter(email) {
    try {
        const result = await emailjs.send(
            EmailConfig.serviceId,
            EmailConfig.templateId,
            {
                from_email: email,
                subject: 'Newsletter Subscription',
                message: `User ${email} subscribed to newsletter`
            },
            EmailConfig.publicKey
        );
        return { success: true, data: result };
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return { success: false, error: error.message };
    }
}

/**
 * Generic API Request (for future use)
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE)
 * @param {string} endpoint - API endpoint
 * @param {Object} data - Request data
 * @returns {Promise} API response
 */
async function apiRequest(method = 'GET', endpoint = '', data = null) {
    try {
        const url = `${APIConfig.baseURL}${endpoint}`;
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), APIConfig.timeout);
        const options = {
            method: method,
            headers: APIConfig.headers,
            signal: controller.signal
        };

        if (data && (method === 'POST' || method === 'PUT')) {
            options.body = JSON.stringify(data);
        }

        const response = await fetch(url, options);
        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return { success: true, data: result };
    } catch (error) {
        console.error(`API request error:`, error);
        return { success: false, error: error.message };
    }
}

/**
 * GET Request
 * @param {string} endpoint - API endpoint
 * @returns {Promise} API response
 */
async function apiGet(endpoint) {
    return apiRequest('GET', endpoint);
}

/**
 * POST Request
 * @param {string} endpoint - API endpoint
 * @param {Object} data - Request data
 * @returns {Promise} API response
 */
async function apiPost(endpoint, data) {
    return apiRequest('POST', endpoint, data);
}

/**
 * PUT Request
 * @param {string} endpoint - API endpoint
 * @param {Object} data - Request data
 * @returns {Promise} API response
 */
async function apiPut(endpoint, data) {
    return apiRequest('PUT', endpoint, data);
}

/**
 * DELETE Request
 * @param {string} endpoint - API endpoint
 * @returns {Promise} API response
 */
async function apiDelete(endpoint) {
    return apiRequest('DELETE', endpoint);
}

/**
 * Load JSON data from data/ folder
 * @param {string} filename - JSON filename (without path)
 * @returns {Promise} Parsed JSON data
 */
async function loadDataFile(filename) {
    try {
        const response = await fetch(withBasePath(`/data/${filename}`));
        if (!response.ok) {
            throw new Error(`Failed to load ${filename}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error loading data file:`, error);
        return null;
    }
}

/**
 * Load all data files at once
 * @returns {Promise} Object containing all data
 */
async function loadAllData() {
    try {
        const [services, team, testimonials, pricing] = await Promise.all([
            loadDataFile('services.json'),
            loadDataFile('team.json'),
            loadDataFile('testimonials.json'),
            loadDataFile('pricing.json')
        ]);

        return {
            services,
            team,
            testimonials,
            pricing
        };
    } catch (error) {
        console.error('Error loading all data:', error);
        return {};
    }
}

/**
 * Handle API errors consistently
 * @param {Object} error - Error object
 */
function handleApiError(error) {
    console.error('API Error:', error);
    const message = error.response?.data?.message || error.message || 'An error occurred';
    showAlertModal('Error', message);
    return false;
}

/**
 * Show loading state during API calls
 * @param {boolean} show - Show or hide loader
 */
function setLoading(show = true) {
    if (show) {
        showLoadingModal('Processing...');
    } else {
        hideLoadingModal();
    }
}

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        APIConfig,
        submitQuoteForm,
        submitContactForm,
        subscribeNewsletter,
        apiRequest,
        apiGet,
        apiPost,
        apiPut,
        apiDelete,
        loadDataFile,
        loadAllData,
        handleApiError,
        setLoading
    };
}
