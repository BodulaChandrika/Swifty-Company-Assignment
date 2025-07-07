import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

export default function Dashboard() {
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComments(data));
  }, []);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key) {
      if (sortConfig.direction === 'asc') direction = 'desc';
      else if (sortConfig.direction === 'desc') direction = null;
      else direction = 'asc';
    }
    setSortConfig({ key: direction ? key : null, direction });
  };

  const filtered = comments.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase()) ||
    c.body.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = sortConfig.key
    ? [...filtered].sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];
        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      })
    : filtered;

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="d-flex justify-content-between mb-3">
          <div className="btn-group">
            <button className="sort-btn btn-outline-primary" onClick={() => handleSort('postId')}>Sort Post ID</button>
            <button className="sort-btn btn-outline-primary" onClick={() => handleSort('name')}>Sort Name</button>
            <button className="sort-btn btn-outline-primary" onClick={() => handleSort('email')}>Sort Email</button>
          </div>
          <input
            className="form-control w-25"
            type="text"
            placeholder="Search name, email, comment"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-primary">
              <tr>
                <th>Post ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              {sorted.slice(0, 20).map(c => (
                <tr key={c.id}>
                  <td>{c.postId}</td>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Link to="/profile" className="btn btn-success">Go to Profile</Link>
      </div>
    </>
  );
}
