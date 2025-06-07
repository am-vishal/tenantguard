import { useState, useEffect } from 'react';

export const useTenantData = () => {
    const [tenants, setTenants] = useState([]);

    useEffect(() => {
        fetch('/api/tenants').then(res => res.json()).then(setTenants);
    }, []);

    return { tenants };
};
