import { useEffect, useRef } from "react";
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
