import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
    interface Window {
        Genesys: (command: string, action: string, data: any) => void;
    }
}

const usePageTracking = () => {
    const location = useLocation();

    useEffect(() => {
        const getPageTitle = () => {
            switch (location.pathname) {
                case '/':
                    return 'Home';
                case '/about':
                    return 'About';
                case '/portfolio':
                    return 'Portfolio';
                default:
                    if (location.pathname.startsWith('/portfolio/')) {
                        return `Portfolio - ${decodeURIComponent(location.pathname.split('/')[2])}`;
                    }
                    return 'Page Not Found';
            }
        };

        if (window.Genesys) {
            window.Genesys("command", "Journey.pageview", {
                pageTitle: getPageTitle()
            });
        }
    }, [location]);
};

export default usePageTracking; 