import { Fragment, useMemo } from "react";
import { useNavigate } from "react-router-dom";
// components
import Category from "./components/Category";
import Foods from "./components/Foods";
import NextButton from "./components/NextButton";
// redux
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "@/features/categorySlice";
import { selectProduct } from "@/features/productSlice";
import { addProductsToCart } from "@/features/cartSlice";
// config
import { categoryImages, categoryWidth } from "@/config/home_config";

function McDonaldHome() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const category = useSelector(selectCategory);
    const products = useSelector(selectProduct);
    const title = useMemo(() => {
        return categoryImages.find((item) => item.value === category).name;
    }, [category]);
    function nextStepHandler() {
        const selectedProducts = products[category].filter((item) => item.inCart && item.count >= 1);
        if (selectedProducts.length >= 1) {
            dispatch(addProductsToCart(selectedProducts));
            switch (category) {
                case "combo":
                    navigate("/select_combo", { replace: false });
                    break;
                default:
                    navigate("/select_one_order", { replace: false });
                    break;
            }
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
