import { useRouter } from 'next/router';
import axios from 'axios';
import { useState } from 'react';

export default function ProfileComp() {
    const router = useRouter();
    const [data, setData] = useState("nothing");

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me');
        setData(res.data.data._id);
    };

    return(
        <div>
            <h1>Profile</h1>
            <h2>{data === "nothing" ? "Nothing" : data}</h2>
            <button onClick={getUserDetails}>Details</button>
        </div>
    );
}