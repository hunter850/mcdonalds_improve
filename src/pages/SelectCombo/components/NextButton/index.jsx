import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import styled from "@emotion/styled";

const StyledButton = styled(Button)`
    position: fixed;
    right: 24px;
    bottom: 24px;
    background-color: #d90007;
    color: #ffbc0d;
    font-weight: bold;
    font-size: 20px;
    z-index: 10;
    &:hover {
        background-color: #b90007;
        color: #dd990d;
    }
`;

function NextButton(props) {
    const { variant = "contained", children, ...ohters } = props;
    return (
        <StyledButton variant={variant} endIcon={<SendIcon />} {...ohters}>
            {children}
        </StyledButton>
    );
}

export default NextButton;
