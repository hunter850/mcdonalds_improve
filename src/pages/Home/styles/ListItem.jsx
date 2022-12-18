import styled from "@emotion/styled";
import { motion } from "framer-motion";

const MotionLi = motion.li;

const ListItem = styled(MotionLi)`
    flex: 0 0 auto;
    height: 0;
    min-height: 560px;
    width: 480px;
    padding: 40px;
    > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center center;
        user-select: none;
        -webkit-user-drag: none;
    }
`;

export default ListItem;
