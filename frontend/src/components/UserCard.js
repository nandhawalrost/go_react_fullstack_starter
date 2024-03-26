import React from 'react';

function UserCard({ user }) {
  return (
    <div
      style={{
        width: "15em",
        backgroundColor: "#3d594c",
        padding: 2,
        borderRadius: 10,
        marginBlock: 10,
      }}
    >
      <p style={{ fontSize: 20, color: 'white' }}>{user.name}</p>
      <p style={{ fontSize: 15, color: 'white' }}>{user.email}</p>
    </div>
  );
}

export default UserCard;