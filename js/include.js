// include.js — fetch and insert HTML partials into placeholders
var LOGIA_HEALTH = (typeof window !== 'undefined' && (window.LOGIA_HEALTH = window.LOGIA_HEALTH || {
    includes: {},
    dataSections: {},
    flags: {}
})) || { includes: {}, dataSections: {}, flags: {} };

function withBasePath(path) {
    const basePath = (typeof window !== 'undefined' && window.LOGIA_BASE_PATH) || '';
    if (!basePath) return path;
    const normalizedBase = basePath.replace(/\/+$/, '');
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${normalizedBase}${normalizedPath}`;
}

function includeHTML(path, selector) {
    const eLement = document.querySelector(selector);
    if (!eLement) return;
    fetch(withBasePath(path))
        .then(response => {
            if (!response.ok) throw new Error('Failed to load ' + path);
            return response.text();
        })
        .then(html => {
            eLement.innerHTML = html;
            LOGIA_HEALTH.includes[path] = true;
        })
        .catch(err => {
            LOGIA_HEALTH.includes[path] = false;
            console.error(err);
        });
}

// auto-load header/footer if placeholders exist
document.addEventListener('DOMContentLoaded', function () {
    includeHTML('/components/header.html', '#site-header');
    includeHTML('/components/footer.html', '#site-footer');
});
