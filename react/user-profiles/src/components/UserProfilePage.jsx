import { useParams, useNavigate, Link } from 'react-router-dom';

function UserProfilePage({ users, onDeleteUser }) {
    // Extract userId from the URL parameters
    const { userId } = useParams();
    // Hook to programmatically navigate between routes
    const navigate = useNavigate();
    // Find the user object that matches the userId from the list
    const user = users.find((user) => user.id === userId);
    // If no user found, show an error message with a link back to Users page
    if (!user) {
        return (
            <div>
                <h2>User not found</h2>
                <p>No user with id {userId}.</p>
                <Link to="/users">Back to Users</Link>
            </div>
        );
    }

    // Remove user and navigate back to the users list
    const handleDelete = () => {
        onDeleteUser(user.id);
        navigate('/users');
    };

    return (
        <div>
            <h2>{user.name} Profile</h2>
            <ul className="user-details">
                <li>ID: {user.id}</li>
                <li>Name: {user.name}</li>
            </ul>

            <div>
                <button className="delete-btn" onClick={handleDelete}>
                    Delete User
                </button>
                <button className="back-users-btn">
                    <Link to="/users">Back to Users</Link>
                </button>
            </div>
        </div>
    );
}

export default UserProfilePage;
