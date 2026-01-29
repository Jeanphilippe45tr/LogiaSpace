// include.js — fetch and insert HTML partials into placeholders
function includeHTML(path, selector) {
    const el = document.querySelector(selector);
    if (!el) return;
    fetch(path)
        .then(response => {
            if (!response.ok) throw new Error('Failed to load ' + path);
            return response.text();
        })
        .then(html => { el.innerHTML = html; })
        .catch(err => { console.error(err); });
}

// auto-load header/footer if placeholders exist
document.addEventListener('DOMContentLoaded', function () {
    includeHTML('partials/header.html', '#site-header');
    includeHTML('partials/footer.html', '#site-footer');
});
