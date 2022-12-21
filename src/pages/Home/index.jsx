import { useState } from "react";
import { comboImages } from "@/config/home_config";
// styled
import FakeBody from "./styles/FakeBody.styled";
import CarouselWrap from "./styles/CarouselWrap.styled";

// component
import DragTab from "@/components/DragTab";

function Home() {
    const [data, setData] = useState(comboImages);
    function itemClickHandler(event, id) {
        setData((pre) => {
            return pre.map((item) => {
                if (item.id === id) {
                    return { ...item, active: !item.active };
                } else {
                    return item;
                }
            });
        });
    }
    return (
        <FakeBody>
            <CarouselWrap>
                <DragTab orientation="vertical" style={{ height: "100vh" }}>
                    {/* <DragTab orientation="horizontal"> */}
                    {data.map((main) => {
                        return (
                            <DragTab.Item
                                key={main.id}
                                onItemClick={(event) => itemClickHandler(event, main.id)}
                                style={{ outline: main.active ? "1px solid red" : "none" }}
                            >
                                <img src={main.image} alt={main.name} />
                            </DragTab.Item>
                        );
                    })}
                </DragTab>
            </CarouselWrap>
        </FakeBody>
    );
}

export default Home;
