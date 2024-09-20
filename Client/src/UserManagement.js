import React, { useState, useEffect } from 'react';
import { getAllUsers, createUser, updateUser, deleteUser } from './UserService';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ username: '', age: '', cin: '', email: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await getAllUsers();
    setUsers(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await updateUser(editId, user);
    } else {
      await createUser(user);
    }
    setUser({ username: '', age: '', cin: '', email: '' });
    setIsEditing(false);
    setEditId(null);
    fetchUsers();
  };

  const handleEdit = (user) => {
    setUser(user);
    setIsEditing(true);
    setEditId(user.id);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div>
      <h1>User Management</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={user.age}
          onChange={(e) => setUser({ ...user, age: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="CIN"
          value={user.cin}
          onChange={(e) => setUser({ ...user, cin: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
        <button type="submit">{isEditing ? 'Update' : 'Create'}</button>
      </form>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - {user.age} - {user.cin} - {user.email}
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
