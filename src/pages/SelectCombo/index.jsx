import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
// redux
import { useSelector, useDispatch } from "react-redux";
import { selectCombo, updateCombo, resetCombo } from "@/features/comboSlice";
import { getDataFromSession, selectCart, addProductsToCart } from "@/features/cartSlice";
// styled
import {
    SelectComboWrap,
    SelectComboTitle,
    SelectComboList,
    SelectComboItem,
    SelectComboCard,
    StyledCheckbox,
    SelectComboImageWrap,
    CardTitle,
} from "./styles";
// components
import PrevButton from "./components/PrevButton";
// import MoreButton from "./components/MoreButton";
import NextButton from "./components/NextButton";
import ProductCounter from "@/components/ProductCounter";

function SelectCombo() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const combo = useSelector(selectCombo);
    const cart = useSelector(selectCart);
    const totalCombo = useMemo(() => {
        return cart.reduce((accu, current) => {
            if (current.id >= 1 && current.id <= 10) {
                return accu + current.count;
            } else {
                return accu;
            }
        }, 0);
    }, [cart]);
    const selectedComboCount = useMemo(() => {
        return combo.reduce((accu, current) => {
            if (current.inCart) {
                return accu + current.count;
            } else {
                return accu;
            }
        }, 0);
    }, [combo]);
    useEffect(() => {
        dispatch(getDataFromSession());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    function selectHandler(event, id) {
        const newCombo = combo.map((item) => {
            if (item.id === id) {
                return { ...item, inCart: !item.inCart };
            } else {
                return item;
            }
        });
        const newComboCount = newCombo.reduce((accu, current) => {
            if (current.inCart) {
                return accu + current.count;
            } else {
                return accu;
            }
        }, 0);
        if (newComboCount <= totalCombo) {
            dispatch(updateCombo(newCombo));
        }
    }
    function changeCountHanlder(event, id, num) {
        const targetCombo = combo.find((item) => item.id === id);
        const newCombo = combo.map((item) => {
            if (item.id === id) {
                return { ...item, count: item.count + num };
            } else {
                return item;
            }
        });
        const newComboCount = newCombo.reduce((accu, current) => {
            if (current.inCart) {
                return accu + current.count;
            } else {
                return accu;
            }
        }, 0);
        if (targetCombo.count + num >= 0 && targetCombo.count + num <= 999 && newComboCount <= totalCombo) {
            dispatch(updateCombo(newCombo));
        }
    }
    function lastStepHandler() {
        dispatch(resetCombo());
        navigate("/", { replace: true });
    }
    function checkHandler() {
        const selectedCombo = combo.filter((item) => item.inCart && item.count >= 1);
        if (selectedCombo.length >= 1) {
            // do next
            sessionStorage.setItem("combo_history", JSON.stringify(selectedCombo));
            const sessionCart = sessionStorage.getItem("cart");
            const cartData = sessionCart === null ? [] : JSON.parse(sessionCart).concat(selectedCombo);
            sessionStorage.setItem("cart", JSON.stringify(cartData));
            dispatch(addProductsToCart(selectedCombo));
        }
        if (cart.length + selectedCombo.length >= 1) {
            navigate("/check", { replace: false });
        }
    }
    return (
        <SelectComboWrap>
            <SelectComboTitle>
                <span className="title_text">
                    超值全餐配餐<span className="combo_count">{`(${selectedComboCount}/${totalCombo})`}</span>
                </span>
            </SelectComboTitle>
            <SelectComboList>
                {combo.map((item) => (
                    <SelectComboItem key={item.id}>
                        <SelectComboCard selected={item.inCart}>
                            <StyledCheckbox checked={item.inCart} onClick={(event) => selectHandler(event, item.id)} />
                            <SelectComboImageWrap
                                onClick={(event) => selectHandler(event, item.id)}
                                className="image_wrap"
                            >
                                <img src={item.image} alt={item.name} draggable="false" />
                            </SelectComboImageWrap>
                            <CardTitle>{item.name}</CardTitle>
                            <ProductCounter className="counter">
                                <ProductCounter.Minus onClick={(event) => changeCountHanlder(event, item.id, -1)} />
                                <ProductCounter.Input value={item.count} />
                                <ProductCounter.Plus onClick={(event) => changeCountHanlder(event, item.id, 1)} />
                            </ProductCounter>
                        </SelectComboCard>
                    </SelectComboItem>
                ))}
            </SelectComboList>
            <PrevButton onClick={lastStepHandler}>上一步</PrevButton>
            {/* <MoreButton onClick={addMoreHandler}>加購</MoreButton> */}
            <NextButton onClick={checkHandler}>結帳</NextButton>
        </SelectComboWrap>
    );
}

export default SelectCombo;
