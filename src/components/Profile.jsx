import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data[0]));
  }, []);

  if (!user) return (
    <>
      <Header />
      <div className="container mt-4">
        <p>Loading...</p>
      </div>
    </>
  );

  return (
    <>
      <Header />
      <div className="container mt-4">
        <Link to="/" className="btn btn-outline-secondary mb-3">&larr; Back to Dashboard</Link>
        <h2>Welcome, {user.name}</h2>
        <div className="card p-4">
          <h5>{user.name}</h5>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Address:</strong> {`${user.address.street}, ${user.address.city}`}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>
      </div>
    </>
  );
}
