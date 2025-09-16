import { useState, useEffect } from 'react';

function Loading({ onComplete }) {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercentage(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        onComplete();
                    }, 1500);
                    return 100;
                }
                return prev + 1;
            });
        }, 30);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 bg-black z-50 flex items-end justify-end">
            <div className="p-8 ">
                <span
                    className="text-white text-9xl font-bold"
                    style={{ fontFamily: 'ppmond, sans-serif' }}
                >
                    {percentage === 100 ? 'Welcome!' : `${percentage}%`}
                </span>
            </div>
        </div>
    );
}

export default Loading;