import { Fragment, useMemo } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// redux
import { useSelector, useDispatch } from "react-redux";
import { selectProduct, updateProductValue } from "@/features/productSlice";
// components
import ProductCounter from "@/components/ProductCounter";
// styled
import {
    FoodsGlobalStyles,
    FoodsWrap,
    TitleWrap,
    FoodsTitle,
    ProductWrap,
    ProductList,
    ProductItem,
    ProductCard,
    ProductImageWrap,
    ProductTitle,
} from "./styles";
// config
import { categoryImages } from "@/config/home_config";

function Foods(props) {
    const { title = "", marginLeft = "300px" } = props;
    const dispatch = useDispatch();
    const { breakfast, combo, order } = useSelector(selectProduct);
    const titleArray = useMemo(() => {
        return [title];
    }, [title]);
    const productArray = useMemo(() => {
        switch (title) {
            case "早餐":
                return [breakfast];
            case "超值全餐":
                return [combo];
            case "單點":
                return [order];
            default:
                return [breakfast];
        }
    }, [title, breakfast, combo, order]);
    function selectHandler(event, id) {
        const selectedCategory = categoryImages.find((item) => item.name === title);
        const nowProduct = productArray[0];
        dispatch(
            updateProductValue({
                key: selectedCategory.value,
                value: nowProduct.map((item) => {
                    if (item.id === id) {
                        return { ...item, inCart: !item.inCart };
                    } else {
                        return item;
                    }
                }),
            })
        );
    }
    function changeCountHanlder(event, id, num) {
        const selectedCategory = categoryImages.find((item) => item.name === title);
        const nowProduct = productArray[0];
        dispatch(
            updateProductValue({
                key: selectedCategory.value,
                value: nowProduct.map((item) => {
                    if (item.id === id) {
                        return item.count + num < 0
                            ? { ...item, count: 0 }
                            : item.count + num > 999
                            ? { ...item, count: 999 }
                            : { ...item, count: item.count + num };
                    } else {
                        return item;
                    }
                }),
            })
        );
    }
    return (
        <Fragment>
            <FoodsGlobalStyles />
            <FoodsWrap marginLeft={marginLeft}>
                <TitleWrap>
                    <TransitionGroup>
                        {titleArray.map((item) => (
                            <CSSTransition key={item} timeout={500} classNames="item">
                                <FoodsTitle>{item}</FoodsTitle>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </TitleWrap>
                <ProductWrap>
                    <TransitionGroup>
                        {productArray.map((items) => (
                            <CSSTransition key={items[0].name} timeout={500} classNames="item">
                                <ProductList>
                                    {items.map((item) => (
                                        <ProductItem key={item.id}>
                                            <ProductCard selected={item.inCart}>
                                                <ProductImageWrap onClick={(event) => selectHandler(event, item.id)}>
                                                    <img src={item.image} alt={item.name} draggable="false" />
                                                </ProductImageWrap>
                                                <ProductTitle>{item.name}</ProductTitle>
                                                <ProductCounter className="counter">
                                                    <ProductCounter.Minus
                                                        onClick={(event) => changeCountHanlder(event, item.id, -1)}
                                                    />
                                                    <ProductCounter.Input value={item.count} />
                                                    <ProductCounter.Plus
                                                        onClick={(event) => changeCountHanlder(event, item.id, 1)}
                                                    />
                                                </ProductCounter>
                                            </ProductCard>
                                        </ProductItem>
                                    ))}
                                </ProductList>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ProductWrap>
            </FoodsWrap>
        </Fragment>
    );
}

export default Foods;
