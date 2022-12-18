import { useState, useEffect } from "react";
// styled
import TabWrap from "./styles/TabWrap.styled";
import Train from "./styles/Train.styled";
// components
import TabItem from "./components/TabItem";
import useSizeFromChild from "@/hooks/useSizeFromChild";
import useSize from "@/hooks/useSize";

function DragTab(props) {
    const { orientation = "horizontal", children, ...others } = props;
    const [constraint, setConstraint] = useState(0);
    const [wrapTarget, { width: wrapWidth, height: wrapHeight }] = useSize();
    const [target, currentSize] = useSizeFromChild();
    useEffect(() => {
        setConstraint(() => {
            const { scrollWidth, scrollHeight } = currentSize;
            if (orientation === "vertical") {
                const scrollH = scrollHeight === null ? 0 : scrollHeight;
                const h = wrapHeight === null ? 0 : wrapHeight;
                return scrollH - h;
            } else {
                const scrollW = scrollWidth === null ? 0 : scrollWidth;
                const w = wrapWidth === null ? 0 : wrapWidth;
                return scrollW - w;
            }
        });
    }, [currentSize, wrapWidth, wrapHeight, orientation]);
    return (
        <TabWrap ref={wrapTarget} {...others}>
            <Train
                ref={target}
                drag={orientation === "vertical" ? "y" : "x"}
                dragConstraints={
                    orientation === "vertical" ? { top: -constraint, bottom: 0 } : { right: 0, left: -constraint }
                }
                dragTransition={{ bounceStiffness: 200, bounceDamping: 15 }}
                whileTap={{ cursor: "grabbing" }}
                orient={orientation}
            >
                {children}
            </Train>
        </TabWrap>
    );
}

export default Object.assign(DragTab, {
    Item: TabItem,
});
