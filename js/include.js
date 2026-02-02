// include.js — fetch and insert HTML partials into placeholders
function includeHTML(path, selector) {
    const eLement = document.querySelector(selector);
    if (!eLement) return;
    fetch(path)
        .then(response => {
            if (!response.ok) throw new Error('Failed to load ' + path);
            return response.text();
        })
        .then(html => { eLement.innerHTML = html; })
        .catch(err => { console.error(err); });
}

// auto-load header/footer if placeholders exist
document.addEventListener('DOMContentLoaded', function () {
    includeHTML('components/header.html', '#site-header');
    includeHTML('components/footer.html', '#site-footer');
});
