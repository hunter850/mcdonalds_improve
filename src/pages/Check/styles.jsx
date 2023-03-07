import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";

const width = "300px";

export const SidebarWrap = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 0px;
    left: 0px;
    width: ${width};
    height: 100vh;
    box-shadow: 1px 0px 10px 0px #0006;
    z-index: 10;
`;

export const SettingList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > li {
        padding: 24px 0px;
    }
`;

export const StyledTextField = styled(TextField)`
    display: flex;
    width: 200px;
    margin: 24px auto 0px;
    opacity: ${({ show = true }) => (show === "true" ? "1" : "0")};
    transform-origin: 0% 0%;
    transform: ${({ show = true }) => (show === "true" ? "scale(1)" : "scale(0.5)")};
    transition: transform 0.3s ease, opacity 0.3s ease;
    & .MuiOutlinedInput-root {
        &.Mui-focused fieldset {
            border-color: #ed6c02;
        }
    }
`;

export const CheckTitle = styled.h2`
    font-size: 48px;
    text-align: center;
    line-height: 2;
`;

export const CheckWrap = styled.div`
    margin-left: ${width};
    width: calc(100% - ${width});
    > div {
        height: calc(100vh - 96px);
    }
`;

export const ProductWrap = styled.div`
    width: 100%;
    height: 100%;
    .item {
        padding: 24px 0px;
    }
    .card {
        display: flex;
        align-items: center;
        padding: 0px 120px;
    }
    .img_wrap {
        flex: 1 0 0;
        > img {
            width: 100%;
            aspect-ratio: 16 / 9;
            object-fit: cover;
            object-position: center center;
        }
    }
    .name {
        flex: 1 0 0;
        text-align: center;
        font-size: 20px;
    }
    .count {
        flex: 1 0 0;
        text-align: center;
        font-size: 20px;
    }
`;
