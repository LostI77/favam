import { useEffect, useState } from 'react';
export default function useWindowEvents() {
    const [isDesktopNav, setIsDesktopNav] = useState(true);
    const handleResize = () => {
        const isDesktop = window.innerWidth > 1024;
        setIsDesktopNav(isDesktop);
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return(() => {
            window.removeEventListener('resize', handleResize);
        });
    }, []);
    return { isDesktopNav };
}
