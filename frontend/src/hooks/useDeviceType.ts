import { useEffect, useState } from 'react';

const getDeviceType = (width: number): 'mobile' | 'tablet' | 'desktop' => {
    if (width < 720) return 'mobile';
    if (width >= 720 && width < 998) return 'tablet';
    return 'desktop';
};

const useDeviceType = (): 'mobile' | 'tablet' | 'desktop' => {
    const [deviceType, setDeviceType] = useState(getDeviceType(window.innerWidth));

    useEffect(() => {
        const handleResize = () => {
            setDeviceType(getDeviceType(window.innerWidth));
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return deviceType;
};

export default useDeviceType;
