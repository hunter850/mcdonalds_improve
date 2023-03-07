import { useEffect, useRef, useMemo } from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { selectCategory, updateCategory } from "@/features/categorySlice";
// style
import { CategoryWrap, CategoryList, CategoryItem, ImageWrap } from "./styles";
// config
import { categoryImages } from "@/config/home_config";

function Category(props) {
    const { width = "300px" } = props;
    const itemRef = useRef([]);
    const dispatch = useDispatch();
    const category = useSelector(selectCategory);
    function changeHandler(event) {
        dispatch(updateCategory(event.target.value));
    }
    useEffect(() => {
        const elements = itemRef.current;
        function clickHandler(event) {
            event.currentTarget.querySelector("input").click();
        }
        elements.forEach((el) => {
            el.addEventListener("click", clickHandler);
        });
        return () => {
            elements.forEach((el) => {
                el.removeEventListener("click", clickHandler);
            });
        };
    }, []);
    const isMorning = useMemo(() => {
        const timeNow = new Date(Date.now());
        const nowHour = timeNow.getHours();
        const nowMin = timeNow.getMinutes();
        if (nowHour >= 5 && nowHour <= 10) {
            if (nowHour === 10 && nowMin > 30) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }, []);
    return (
        <CategoryWrap width={width}>
            <CategoryList>
                {categoryImages.map((item) => (
                    <CategoryItem
                        active={item.value === category}
                        ref={(node) => {
                            if (itemRef.current.indexOf(node) === -1 && node !== null) {
                                itemRef.current.push(node);
                            }
                        }}
                        key={item.id}
                        show={
                            item.value === "order"
                                ? true
                                : isMorning
                                ? item.value === "breakfast"
                                : item.value === "combo"
                        }
                    >
                        <ImageWrap name={item.name}>
                            <img src={item.image} alt={item.name} draggable="false" />
                            <input
                                type="radio"
                                value={item.value}
                                onChange={changeHandler}
                                id={item.value}
                                checked={item.value === category}
                                name="category"
                            />
                        </ImageWrap>
                        <p>{item.name}</p>
                    </CategoryItem>
                ))}
            </CategoryList>
        </CategoryWrap>
    );
}

export default Category;
