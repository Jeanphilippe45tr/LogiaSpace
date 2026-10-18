import { useEffect, useRef, useState } from 'react';

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('openSearchModal', handler);
    return () => window.removeEventListener('openSearchModal', handler);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="modal fade show d-block" id="searchModal" tabIndex={-1} style={{ display: 'block' }}>
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content" style={{ background: 'rgba(9, 30, 62, .7)' }}>
          <div className="modal-header border-0">
            <button
              type="button"
              className="btn bg-white btn-close"
              onClick={() => setOpen(false)}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body d-flex align-items-center justify-content-center">
            <form
              className="input-group"
              style={{ maxWidth: 600 }}
              onSubmit={(e) => {
                e.preventDefault();
                setOpen(false);
              }}
            >
              <label htmlFor="searchInput" className="visually-hidden">Search keyword</label>
              <input
                ref={inputRef}
                type="text"
                id="searchInput"
                className="form-control bg-transparent border-primary p-3"
                placeholder="Type search keyword"
              />
              <button className="btn btn-primary px-4" type="submit" aria-label="Search">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
