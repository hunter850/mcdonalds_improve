import { StyledInput } from "../styles";

function CounterInput(props) {
    const { value, onChange = () => {}, ...others } = props;
    function changeHandler(event) {
        onChange(event);
    }
    return <StyledInput value={value} onChange={changeHandler} {...others} />;
}

export default CounterInput;
