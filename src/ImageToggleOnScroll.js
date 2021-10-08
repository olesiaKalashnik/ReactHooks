import React, { useRef, useEffect, useState } from 'react';

export default function ImageToggleOnScroll({ primaryImg, secondaryImg }) {
    const imageRef = useRef(null);

    const [isLoading, setIsLoading] = useState(true);

    const [inView, setInView] = useState(false);

    const scrollHandler = () => {
        setInView(isInView());
    };

    const isInView = () => {
        const rect = imageRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    useEffect(() => {
        setIsLoading(false);
        setInView(isInView());
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <img
            src={
                isLoading
                    ? 'static/loading-buffering.gif'
                    : inView
                    ? secondaryImg
                    : primaryImg
            }
            alt=""
            ref={imageRef}
        />
    );
}
