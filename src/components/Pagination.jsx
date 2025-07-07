import React from 'react';

export default function Pagination({ total, pageSize, currentPage, onPageChange, onPageSizeChange }) {
  const totalPages = Math.ceil(total / pageSize);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="d-flex justify-content-between align-items-center mt-3">
      <div>
        <span className="me-2">Showing {((currentPage - 1) * pageSize) + 1}-{Math.min(currentPage * pageSize, total)} of {total} items</span>
      </div>
      <div>
        {pages.map(page => (
          <button
            key={page}
            className={`btn btn-sm ${page === currentPage ? 'btn-primary' : 'btn-outline-primary'} mx-1`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <div>
        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="form-select"
          style={{ width: 'auto' }}
        >
          {[10, 50, 100].map(size => (
            <option key={size} value={size}>{size} / Page</option>
          ))}
        </select>
      </div>
    </div>
  );
}
