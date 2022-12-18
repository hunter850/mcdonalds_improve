// components
import PlusButton from "./components/PlusButton";
import MinusButton from "./components/MinusButton";
import CounterInput from "./components/CounterInput";
// styled
import { CounterWrap } from "./styles";

function ProductCounter(props) {
    const { children, ...ohters } = props;
    return <CounterWrap {...ohters}>{children}</CounterWrap>;
}

export default Object.assign(ProductCounter, {
    Plus: PlusButton,
    Minus: MinusButton,
    Input: CounterInput,
});
