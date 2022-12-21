import styled from "@emotion/styled";
import Checkbox from "@mui/material/Checkbox";

export const SelectComboWrap = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0px 10% 120px;
`;

export const SelectComboTitle = styled.h2`
    font-size: 48px;
    text-align: center;
    line-height: 2;
    position: relative;
    span.title_text {
        position: relative;
    }
    span.combo_count {
        position: absolute;
        top: 50%;
        left: calc(100% + 12px);
        transform: translateY(-50%);
    }
`;

export const SelectComboList = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const SelectComboItem = styled.li`
    width: 33.33%;
    padding: 24px;
`;

export const SelectComboCard = styled.div`
    width: 100%;
    border: 2px solid ${({ selected = false }) => (selected ? "#6d6" : "transparent")};
    border-radius: 12px;
    padding: 12px;
    position: relative;
    pointer-events: none;
    overflow: hidden;
    &:hover {
        border: 2px solid ${({ selected = false }) => (selected ? "#6d6" : "#6d66")};
    }
    .image_wrap {
        pointer-events: auto;
    }
    .counter {
        height: 36px;
    }
`;

export const SelectComboCheck = styled.input`
    pointer-events: auto;
    position: absolute;
    z-index: 10;
    cursor: pointer;
    &:focus {
        outline: none;
    }
`;

export const StyledCheckbox = styled(Checkbox)`
    pointer-events: auto;
    position: absolute;
    z-index: 10;
    cursor: pointer;
    &.Mui-checked {
        color: #6d6;
    }
`;

export const SelectComboImageWrap = styled.div`
    width: 100%;
    aspect-ratio: 16 / 9;
    cursor: pointer;
    transition: transform 0.1s ease;
    &:hover {
        transform: scale(1.1);
    }
    &:active {
        transform: scale(0.9);
    }

    > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center center;
        user-select: none;
    }
`;

export const CardTitle = styled.h4`
    text-align: center;
    color: #333;
    margin-bottom: 6px;
    position: relative;
    z-index: 10;
`;
