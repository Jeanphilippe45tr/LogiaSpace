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

const sectionConfig = {
    pricing:{
        file: "/data/pricing.json",
        render: renderPricing
    },
    services:{
        file: "/data/services.json",
        render: renderServices
    },
    team:{
        file: "/data/team.json",
        render: renderTeam
    },
    testimonials:{
        file: "/data/testimonials.json",
        render: renderTestimonial
    },
};

document.querySelectorAll("[data-section]").forEach(section => {
    const type = section.dataset.section;
    const config = sectionConfig[type];

    if(!config) return;

    fetch(withBasePath(config.file))
    .then(res => res.json())
    .then(data => {
        config.render(section, data);
        LOGIA_HEALTH.dataSections[type] = true;
    })
    .catch(err => {
        LOGIA_HEALTH.dataSections[type] = false;
        console.error(`Error loading ${type}`, err);
    });
})

function renderTestimonial(container, data) {
    const testimonials = Array.isArray(data) ? data : (data && data.testimonials) || [];
    container.innerHTML = `
            <div class="testimonial-item bg-light my-4">
            ${testimonials.map(t => `
                <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                    <img class="img-fluid rounded" src="${t.image}" alt="${t.name}" style="width: 60px; height: 60px;">
                    <div class="ps-4">
                        <h4 class="text-primary mb-1">${t.name}</h4>
                        <small class="text-uppercase">${t.role}</small>
                    </div>
                </div>
                <div class="pt-4 pb-5 px-5">
                ${t.comment}
                </div>
            `).join("")}
                
            </div>
    `;
}

function renderPricing(container, data) {
    const plans = Array.isArray(data) ? data : (data && data.pricing) || [];
    container.innerHTML = `
    ${plans.map(p => `
            <div class="col-lg-4 wow slideInUp" data-wow-delay="${p.delayTime}s">
                <div class="bg-light rounded">
                <div class="border-bottom py-4 px-5 mb-4">
                            <h4 class="text-primary mb-1">${p.name}</h4>
                            <small class="text-uppercase">${p.description}</small>
                    </div>
                    <div class="p-5 pt-0">
                            <h1 class="display-5 mb-3">
                                <small class="align-top"
                                    style="font-size: 22px; line-height: 45px;">${p.currency}</small>${p.price}<small
                                    class="align-bottom" style="font-size: 16px; line-height: 40px;">${p.duration}</small>
                            </h1>
                            <div class="d-flex justify-content-between mb-3"><span>${p.features.join("<br>")}</span><i
                                    class="fa fa-check text-primary pt-1"></i></div>
                            <div class="d-flex justify-content-between mb-3"><span>${(p.non_features || p.non_nfeatures || []).join("<br>")}</span><i
                                    class="fa fa-times text-danger pt-1"></i></div>
                            <a href="/pages/quote.html" class="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                    </div>
                </div>
            </div>
            `).join("")}
    `;
}

function renderServices(container, data) {
    const services = Array.isArray(data) ? data : (data && data.services) || [];
    container.innerHTML = `
            ${services.map(s => `
            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="${s.delayTime}s">
                    <div
                        class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div class="service-icon">
                            <i class="fa ${s.icon || 'fa-shield-alt'} text-white"></i>
                        </div>
                        <h4 class="mb-3">${s.name}</h4>
                        <p class="m-0">${s.description}</p>
                        <a class="btn btn-lg btn-primary rounded" href="/pages/service.html">
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
            </div>
            `).join("")}
            
    `;
}

function renderTeam(container, data) {
    const members = Array.isArray(data) ? data : (data && data.team) || [];
    container.innerHTML = `
            <div class="row g-5">
            ${members.map(m => `
            <div class="col-lg-4 wow slideInUp" data-wow-delay="${m.delayTime}s">
                    <div class="team-item bg-light rounded overflow-hidden">
                        <div class="team-img position-relative overflow-hidden">
                            <img class="img-fluid w-100" src="${m.image}" alt="">
                            <div class="team-social">
                                <a class="btn btn-lg btn-primary btn-lg-square rounded" href="${m.social.twitter}"><i
                                        class="fab fa-twitter fw-normal"></i></a>
                                <a class="btn btn-lg btn-primary btn-lg-square rounded" href="${m.social.facebook}"><i
                                        class="fab fa-facebook-f fw-normal"></i></a>
                                <a class="btn btn-lg btn-primary btn-lg-square rounded" href="${m.social.instagram}"><i
                                        class="fab fa-instagram fw-normal"></i></a>
                                <a class="btn btn-lg btn-primary btn-lg-square rounded" href="${m.social.linkedin}"><i
                                        class="fab fa-linkedin-in fw-normal"></i></a>
                            </div>
                        </div>
                        <div class="text-center py-4">
                            <h4 class="text-primary">${m.name}</h4>
                            <p class="text-uppercase m-0">${m.position}</p>
                        </div>
                    </div>
            </div>
            `).join("")}
            </div>
    `;
}
