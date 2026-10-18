export default function SearchModal({ isOpen = false }: { isOpen?: boolean }) {
  return (
    <div
      className={`modal fade${isOpen ? ' show d-block' : ''}`}
      id="searchModal"
      tabIndex={-1}
      style={{ display: isOpen ? 'block' : 'none' }}
    >
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content" style={{ background: 'rgba(9, 30, 62, .7)' }}>
          <div className="modal-header border-0">
            <button type="button" className="btn bg-white btn-close" aria-label="Close"></button>
          </div>
          <div className="modal-body d-flex align-items-center justify-content-center">
            <div className="input-group" style={{ maxWidth: 600 }}>
              <label htmlFor="searchInput" className="visually-hidden">Search keyword</label>
              <input
                type="text"
                id="searchInput"
                className="form-control bg-transparent border-primary p-3"
                placeholder="Type search keyword"
              />
              <button className="btn btn-primary px-4" aria-label="Search">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
