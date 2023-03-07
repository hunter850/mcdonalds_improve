import Button from "@mui/material/Button";
import styled from "@emotion/styled";

const StyledButton = styled(Button)`
    position: fixed;
    left: 50%;
    bottom: 24px;
    transform: translateX(-50%);
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

function MoreButton(props) {
    const { variant = "contained", children, ...ohters } = props;
    return (
        <StyledButton variant={variant} {...ohters}>
            {children}
        </StyledButton>
    );
}

export default MoreButton;
