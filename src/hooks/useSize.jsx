import { useState, useEffect, useRef, useCallback } from "react";

function useSize() {
    const [currentSize, setCurrentSize] = useState({
        scrollWidth: null,
        scrollHeight: null,
        width: null,
        height: null,
    });
    const elementRef = useRef(null);
    const observerRef = useRef(null);
    function getSize(elements) {
        const el = elements[0].target;
        if (!el) return;
        const scrollWidth = el.scrollWidth ?? 0;
        const scrollHeight = el.scrollHeight ?? 0;
        const width = el.offsetWidth ?? 0;
        const height = el.offsetHeight ?? 0;
        setCurrentSize({ scrollWidth, scrollHeight, width, height });
    }
    const target = useCallback((element) => {
        elementRef.current = element;
        if (element) {
            observerRef.current = new ResizeObserver(getSize).observe(element);
        }
    }, []);
    useEffect(() => {
        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);
    return [target, currentSize, elementRef];
}

export default useSize;
