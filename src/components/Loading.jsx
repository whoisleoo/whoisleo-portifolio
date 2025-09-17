import { useState, useEffect } from 'react';
import { useTheme } from "../context/ThemeContext";

function Loading({ onComplete }) {
    const [percentage, setPercentage] = useState(0);
    const { isDark, toggleTheme } = useTheme();

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
        <div className={`fixed inset-0 ${isDark ? "bg-black text-white" : "bg-white text-black"} z-50 flex items-end justify-end`}>
            <div className="p-8 ">
                <span
                    className="text-9xl font-bold"
                    style={{ fontFamily: 'ppmond, sans-serif' }}
                >
                    {percentage === 100 ? 'Welcome!' : `${percentage}%`}
                </span>
            </div>
        </div>
    );
}

export default Loading;