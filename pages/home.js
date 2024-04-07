// pages/home.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HomeRedirect = () => {
    const router = useRouter();

    useEffect(() => {
        router.replace('/');
    }, []);

    return null;
};

export default HomeRedirect;