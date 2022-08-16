import { useState, useEffect } from 'react';

const useScript = ( src, onLoad ) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let script = document.querySelector(`script[src="${src}"]`);
        if (!script) {
            script = document.createElement('script');
            script.src = src;
            script.async = true;
        }
        const handleLoad = () => {
            setLoading(false);
            onLoad();
        };
        const handleError = (error) => setError(error);
        script.addEventListener('load', handleLoad);
        script.addEventListener('error', handleError);

        document.body.appendChild(script);

        return () => {
            script.removeEventListener('load', handleLoad);
            script.removeEventListener('error', handleError);
        }
    }, [src, onLoad]);
    return [loading, error];
};

export default useScript;