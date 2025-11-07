import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import Notifications from './Notifications';
import Settings from './Settings';

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                <Link to="/dashboard/profile" className="mr-3">
                    Profile
                </Link>
                <Link to="/dashboard/notifications" className="mr-3">
                    Notifications
                </Link>
                <Link to="/dashboard/settings" className="mr-3">
                    Settings
                </Link>
            </div>
            <Routes>
                <Route path="profile" element={<Profile />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="settings" element={<Settings />} />
            </Routes>
        </div>
    );
}

export default Dashboard;