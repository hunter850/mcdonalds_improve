import styled from "@emotion/styled";
import ElementWrap from "@/components/ElementWrap";

const TabItem = styled(ElementWrap)`
    flex: 0 0 auto;
    img {
        user-select: none;
        -webkit-user-drag: none;
    }
`;

export default TabItem;
