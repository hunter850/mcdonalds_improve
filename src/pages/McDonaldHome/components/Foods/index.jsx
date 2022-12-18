import { Fragment, useMemo } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// redux
import { useSelector } from "react-redux";
import { selectProduct } from "@/features/productSlice";
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

function Foods(props) {
    const { title = "", marginLeft = "300px" } = props;
    const { breakfast, main, order } = useSelector(selectProduct);
    const titleArray = useMemo(() => {
        return [title];
    }, [title]);
    const productArray = useMemo(() => {
        switch (title) {
            case "早餐":
                return [breakfast];
            case "超值全餐":
                return [main];
            case "單點":
                return [order];
            default:
                return [breakfast];
        }
    }, [title, breakfast, main, order]);
    function selectHandler() {}
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
                                            <ProductCard>
                                                <ProductImageWrap onClick={(event) => selectHandler(event, item.id)}>
                                                    <img src={item.image} alt={item.name} draggable="false" />
                                                </ProductImageWrap>
                                                <ProductTitle>{item.name}</ProductTitle>
                                                <ProductCounter className="counter">
                                                    <ProductCounter.Minus />
                                                    <ProductCounter.Input value={item.count} />
                                                    <ProductCounter.Plus />
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
