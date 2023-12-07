import React, { useState, useEffect, ReactNode } from 'react';

interface ScrollAnimatedDivProps {
  children: ReactNode;
}

const ScrollAnimatedDiv: React.FC<ScrollAnimatedDivProps> = ({ children }) => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollY(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const opacity = Math.max(1 - scrollY / 500, 0);
    const transform = `translateY(${scrollY * 0.2}px)`;

    return (
        <div
            className="container py-lg-6 text-center d-flex align-items-center"
            style={{ opacity, transform }}
        >
            {children}
        </div>
    );
};

export default ScrollAnimatedDiv;
