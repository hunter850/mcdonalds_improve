import { Fragment, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
// components
import Category from "./components/Category";
import Foods from "./components/Foods";
import NextButton from "./components/NextButton";
// redux
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "@/features/categorySlice";
import { getProductData, selectProduct } from "@/features/productSlice";
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
        const allProducts = [].concat.apply([], Object.values(products));
        const selectedProducts = allProducts.filter((item) => item.inCart && item.count >= 1);
        if (selectedProducts.length >= 1) {
            dispatch(addProductsToCart(selectedProducts));
            sessionStorage.setItem("cart", JSON.stringify(selectedProducts));
            sessionStorage.setItem("select_history", JSON.stringify(allProducts));
            const selectedCombo = selectedProducts.filter((item) => item.id >= 1 && item.id <= 10);
            if (selectedCombo.length >= 1) {
                navigate("/select_combo", { replace: false });
            } else {
                navigate("/check", { replace: false });
            }
        }
    }
    useEffect(() => {
        dispatch(getProductData());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Fragment>
            <Category width={categoryWidth} />
            <Foods title={title} marginLeft={categoryWidth} />
            <NextButton onClick={nextStepHandler}>下一步</NextButton>
        </Fragment>
    );
}

export default McDonaldHome;
