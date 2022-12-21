import TabItemStyled from "../styles/TabItem.styled";

function TabItem(props) {
    const { component = "li", children, onMouseDown = () => {}, onItemClick = () => {}, ...others } = props;
    function mouseDownHandler(event) {
        onMouseDown(event);
        const el = event.currentTarget;
        const downX = event.clientX;
        function mouseupHandler(e) {
            const upX = e.clientX;
            if (Math.abs(downX - upX) <= 0) {
                onItemClick(event);
            }
            el.removeEventListener("mouseup", mouseupHandler);
        }
        el.addEventListener("mouseup", mouseupHandler);
    }
    return (
        <>
            <TabItemStyled onMouseDown={(event) => mouseDownHandler(event)} component={component} {...others}>
                {children}
            </TabItemStyled>
        </>
    );
}

export default TabItem;
