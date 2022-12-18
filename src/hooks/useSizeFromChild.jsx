import { useState, useEffect, useRef, useCallback } from "react";

function useSizeFromChild() {
    const [currentSize, setCurrentSize] = useState({
        scrollWidth: null,
        scrollHeight: null,
        width: null,
        height: null,
    });
    const elementRef = useRef(null);
    const observerRef = useRef(null);
    function getSize(entries) {
        entries.forEach(() => {
            if (elementRef.current === null) {
                setCurrentSize({ width: null, height: null });
            } else {
                const el = elementRef.current;
                const scrollWidth = el.scrollWidth ?? 0;
                const scrollHeight = el.scrollHeight ?? 0;
                const width = el.offsetWidth ?? 0;
                const height = el.offsetHeight ?? 0;
                setCurrentSize({ scrollWidth, scrollHeight, width, height });
            }
        });
    }
    const target = useCallback((element) => {
        elementRef.current = element;
        if (element && element.children.length >= 1) {
            for (let i = 0; i < element.children.length; i++) {
                observerRef.current = new ResizeObserver(getSize).observe(element.children[i]);
            }
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

export default useSizeFromChild;
