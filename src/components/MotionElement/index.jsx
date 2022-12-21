import { useMemo } from "react";
import { motion } from "framer-motion";

function MotionElement(props) {
    const { component = "div", ...others } = props;
    const MotionEl = useMemo(() => {
        return motion(component);
    }, [component]);
    return <MotionEl {...others} />;
}

export default MotionElement;
