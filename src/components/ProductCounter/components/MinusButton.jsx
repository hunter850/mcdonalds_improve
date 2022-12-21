import MuiRemove from "@/components/Icons/MuiRemove";
// styled
import { StyledButton } from "../styles";

function MinusButton(props) {
    return (
        <StyledButton {...props}>
            <MuiRemove />
        </StyledButton>
    );
}

export default MinusButton;
