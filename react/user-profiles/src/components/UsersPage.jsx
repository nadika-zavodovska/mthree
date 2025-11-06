import { Link } from 'react-router-dom';
import { useState } from 'react';

// Receive props from App.jsx: title — page heading text, users — array of user objects, onAddUser — function to add a user, onDeleteUser — function to delete a user
function UsersPage({ title, users, onAddUser, onDeleteUser }) {
    // state to store user name
    const [name, setName] = useState('');
    // handle form submission (when add user button is clicked)
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh
        onAddUser(name);
        setName(''); // Clear input field after adding
    };

    return (
        <div>
            <h2>{title}</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add user name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button className="add-user-btn" type="submit">Add User</button>
            </form>

            {/* Loop through users and display each one */}
            <ul className="user-list">
                {users.map((user) => (
                    // Unique key required by React for lists
                    <li key={user.id}>
                        {/* Click name to navigate to user profile page */}
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                        <button onClick={() => onDeleteUser(user.id)}>Delete</button>
                    </li>
                ))}
                {/* If no users, show placeholder text */}
                {users.length === 0 && <li>No users</li>}
            </ul>
        </div>
    );
}

export default UsersPage;
