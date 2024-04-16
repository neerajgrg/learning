// pages/profile/[id].js

import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';

const UserProfile = () => {
    const router = useRouter();
    const { id } = router.query;
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            if (id) {
                try {
                    const response = await axios.get(`/api/users/${id}`);
                    setUser(response.data.data);
                } catch (error) {
                    console.error('Error fetching user:', error.response.data);
                }
            }
        };

        fetchUser();
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{user.username}'s Profile</h1>
            <p>Email: {user.email}</p>
            {/* Display other user details */}
        </div>
    );
};

export default UserProfile;