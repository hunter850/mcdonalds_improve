import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Train = styled(motion.ul)`
    display: flex;
    /* width: ${({ orient }) => (orient === "vertical" ? "100%" : null)};
    height: ${({ orient }) => (orient === "vertical" ? null : "100%")}; */
    flex-direction: ${({ orient }) => (orient === "vertical" ? "column" : "row")};
    cursor: grab;
`;

export default Train;
