import { Fragment, useMemo } from "react";
import { useNavigate } from "react-router-dom";
// components
import Category from "./components/Category";
import Foods from "./components/Foods";
import NextButton from "./components/NextButton";
// redux
import { useSelector } from "react-redux";
import { selectCategory } from "@/features/categorySlice";
import { selectProduct } from "@/features/productSlice";
// config
import { categoryImages, categoryWidth } from "@/config/home_config";

function McDonaldHome() {
    const navigate = useNavigate();
    const category = useSelector(selectCategory);
    const products = useSelector(selectProduct);
    const title = useMemo(() => {
        return categoryImages.find((item) => item.value === category).name;
    }, [category]);
    function nextStepHandler() {
        const selectedProducts = products[category].filter((item) => item.inCart);
        if (selectedProducts.length >= 1) {
            navigate("/select_combo", { replace: false });
        }
    }
    return (
        <Fragment>
            <Category width={categoryWidth} />
            <Foods title={title} marginLeft={categoryWidth} />
            <NextButton onClick={nextStepHandler}>下一步</NextButton>
        </Fragment>
    );
}

export default McDonaldHome;
