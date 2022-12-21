import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import Checkbox from "@mui/material/Checkbox";

export function FoodsGlobalStyles() {
    return (
        <Global
            styles={css`
                .item-enter {
                    opacity: 0;
                    transform: translateX(200px);
                }
                .item-enter-active {
                    opacity: 1;
                    transform: translateX(0px);
                    transition: opacity 0.5s ease, transform 0.5s ease;
                }
                .item-exit {
                    opacity: 1;
                    transform: translateX(0px);
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    width: 100%;
                }
                .item-exit-active {
                    opacity: 0;
                    transform: translateX(-200px);
                    transition: opacity 0.5s ease, transform 0.5s ease;
                }
            `}
        />
    );
}

export const FoodsWrap = styled.div`
    overflow-x: hidden;
    width: calc(100% - ${({ marginLeft }) => marginLeft});
    margin-left: ${({ marginLeft }) => marginLeft};
    padding: 0px 120px;
`;

export const TitleWrap = styled.div`
    width: 100%;
    position: relative;
`;

export const FoodsTitle = styled.h2`
    font-size: 48px;
    text-align: center;
    line-height: 2;
`;

export const ProductWrap = styled.div`
    width: 100%;
    position: relative;
`;

export const ProductList = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const ProductItem = styled.li`
    width: 33.33%;
    padding: 24px;
`;

export const ProductCard = styled.div`
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

export const ProductCheck = styled.input`
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

export const ProductImageWrap = styled.div`
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

export const ProductTitle = styled.h4`
    text-align: center;
    color: #333;
    margin-bottom: 6px;
`;
