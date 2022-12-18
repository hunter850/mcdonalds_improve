import styled from "@emotion/styled";

export const CounterWrap = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    pointer-events: all;
`;

export const StyledButton = styled.button`
    padding: 0px;
    margin: 0px;
    color: #999;
    border: none;
    height: 100%;
    aspect-ratio: 1;
    background-color: #fff;
    cursor: pointer;
    transition: color 0.2s ease, transform 0.1s ease;
    &:hover {
        color: #333;
    }
    &:active {
        transform: scale(0.9);
    }
`;

export const StyledInput = styled.input`
    width: 72px;
    color: #333;
    text-align: center;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid #333;
    font-size: 24px;
    &:focus {
        outline: none;
    }
`;
