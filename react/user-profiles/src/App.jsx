import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import UsersPage from './components/UsersPage';
import UserProfilePage from './components/UserProfilePage';
import HomePage from './components/HomePage';
import './App.css';

function App() {
    const [users, setUsers] = useState([
        { id: 'u1', name: 'User 1' },
        { id: 'u2', name: 'User 2' },
        { id: 'u3', name: 'User 3' },
    ]);

    let userIdState = users.length + 1;
    const [nextId, setNextId] = useState(userIdState);

    // Function to generate a new user ID
    const makeId = () => {
        const id = `u${nextId}`;
        setNextId(nextId + 1); // increment
        return id;
    };

    const addUser = (name) => {
        const trimName = name.trim(); // remove whitespace
        if (!trimName) return; // check, don't add empty names
        // Add a new user to the existing users list without mutating the original array
        setUsers((prev) => [...prev, { id: makeId(), name: trimName }]);
    };

    const deleteUser = (userId) => {
        // filter returns a new array with only the users that don't match the deleted ID
        setUsers((prev) => prev.filter((user) => user.id !== userId));
    };

    return (
        <div>
            <nav>
                <ul className="nav-menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/users"
                    element={
                        <UsersPage
                            title="List of all users:"
                            users={users}
                            onAddUser={addUser}
                            onDeleteUser={deleteUser}
                        />
                    }
                />
                <Route
                    path="/users/:userId"
                    element={<UserProfilePage users={users} onDeleteUser={deleteUser} />}
                />
            </Routes>
        </div>
    );
}

export default App;
