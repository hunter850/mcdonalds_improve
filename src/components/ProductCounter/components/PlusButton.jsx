import MuiPlus from "@/components/Icons/MuiPlus";
// styled
import { StyledButton } from "../styles";

function PlusButton(props) {
    return (
        <StyledButton {...props}>
            <MuiPlus />
        </StyledButton>
    );
}

export default PlusButton;
