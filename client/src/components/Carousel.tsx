export default function Carousel() {
  return (
    <div
      id="header-carousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {['carousel-1.jpg', 'carousel-2.jpg'].map((img, i) => (
          <div key={i} className={`carousel-item${i === 0 ? ' active' : ''}`}>
            <img className="w-100" src={`/img/${img}`} alt="Creative and Innovative Digital Solution" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: 900 }}>
                <h5 className="text-white text-uppercase mb-3 animate__animated animate__slideInDown">
                  Creative & Innovative
                </h5>
                <h1 className="display-1 text-white mb-md-4 animate__animated animate__zoomIn">
                  Creative & Innovative Digital Solution
                </h1>
                <a href="/quote" className="btn btn-primary py-md-3 px-md-5 me-3 animate__animated animate__slideInLeft">
                  Free Quote
                </a>
                <a href="/contact" className="btn btn-outline-light py-md-3 px-md-5 animate__animated animate__slideInRight">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        ))}
        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
