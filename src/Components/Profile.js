import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user object from local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      fetch(`https://dummyjson.com/users/${storedUser.id}`)
        .then(res => res.json())
        .then(data => {
          // Save user object with all details in local storage
          localStorage.setItem('user', JSON.stringify(data));
          setUser(data);
        })
        .catch(error => {
          console.log('An error occurred while fetching user data:', error);
        });
    }
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Welcome, {user.username}</h2>
      <img src={user.image} height="300px" width="300px"/>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Address: {user.address.address}</p>
      <p>city: {user.address.city}</p>
      <p>age: {user.age}</p>
      <p>Birth Date: {user.birthDate}</p>
      <p>Blood Group: {user.bloodGroup}</p>
      <p>domain: {user.domain}</p>
      <p>gender: {user.gender}</p>
      <p>eyeColor: {user.eyeColor}</p>
      <p>hairColor: {user.hair.color}</p>
      <p>height: {user.height}</p>
      <p>Phone: {user.phone}</p>
      <p>userAgent: {user.userAgent}</p>
      <p>university: {user.university}</p>
      <p>weight: {user.weight}</p>
      {/* Display other user information as needed */}
    </div>
  );
};

export default Profile;