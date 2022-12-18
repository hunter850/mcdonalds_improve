import { Fragment, useMemo } from "react";
import Category from "./components/Category";
import Foods from "./components/Foods";
// redux
import { useSelector } from "react-redux";
import { selectCategory } from "@/features/categorySlice";
// config
import { categoryImages, categoryWidth } from "@/config/home_config";

function McDonaldHome() {
    const category = useSelector(selectCategory);
    const title = useMemo(() => {
        return categoryImages.find((item) => item.value === category).name;
    }, [category]);
    return (
        <Fragment>
            <Category width={categoryWidth} />
            <Foods title={title} marginLeft={categoryWidth} />
        </Fragment>
    );
}

export default McDonaldHome;
