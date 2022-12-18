import BreakPointProvider from "./BreakPointProvider";

function AllProvider(props) {
    const { children } = props;
    return <BreakPointProvider>{children}</BreakPointProvider>;
}

export default AllProvider;
