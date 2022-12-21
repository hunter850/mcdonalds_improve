import styled from "@emotion/styled";

export const CategoryWrap = styled.div`
    width: ${({ width = "300px" }) => width};
    height: 100vh;
    box-shadow: 1px 0px 10px 0px #0006;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 10;
`;

export const CategoryList = styled.ul`
    width: 100%;
    height: 100%;
    padding: 36px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const CategoryItem = styled.li`
    width: 100%;
    padding: 24px 0px;
    display: ${({ show = true }) => (show ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    cursor: pointer;
    > p {
        width: 100%;
        flex: 1 0 0;
        text-align: center;
        white-space: nowrap;
        font-size: 20px;
        user-select: none;
        font-weight: ${({ active }) => (active ? "bold" : "normal")};
        color: ${({ active }) => (active ? "#333" : "#999")};
        transition: transform 0.3s ease;
    }
    &:hover label {
        transform: scale(1.1);
    }
    &:active label {
        transform: scale(0.9);
        transition: transform 0.1s ease;
    }
    &:hover > p {
        color: ${({ active }) => (active ? "#333" : "#666")};
        font-weight: bold;
    }
`;

export const ImageWrap = styled.label`
    flex: 1 0 0;
    display: block;
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: transform 0.3s ease;
    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
        user-select: none;
        -webkit-user-drag: none;
    }
    input {
        display: none;
    }
`;
