import { useState, useEffect } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import { getDataFromSession, selectCart } from "@/features/cartSlice";
// mui
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// styled
import { SidebarWrap, SettingList, StyledTextField, CheckWrap, CheckTitle, ProductWrap } from "./styles";
// icons
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SiMcdonalds from "@/components/Icons/SiMcdonalds";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";


function Check() {
    const [isForHere, setIsForHere] = useState(true);
    const [isServe, setIsServe] = useState(true);
    const [payWay, setPayWay] = useState("mccard");
    const [textInputValue, setTextInputValue] = useState("");
    const dispatch = useDispatch();
    const cart = useSelector(selectCart);

    useEffect(() => {
        dispatch(getDataFromSession());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function handleChangeForHere(event, newValue) {
        if (newValue !== null) {
            setIsForHere(newValue);
            if (!newValue) {
                setIsServe(false);
            }
        }
    }
    function handleChangeServe(event, newValue) {
        if (newValue !== null) {
            setIsServe(newValue);
        }
    }
    function handleChangePayWay(event, newValue) {
        if (newValue !== null) {
            setPayWay(newValue);
        }
    }
    function textChangeHandler(event) {
        const newValue = event.target.value;
        if (/^\d*$/.test(newValue) || newValue === "") {
            setTextInputValue(newValue);
        }
    }
    return (
        <>
            <SidebarWrap>
                <SettingList>
                    <li>
                        <ToggleButtonGroup
                            color="warning"
                            value={isForHere}
                            exclusive
                            onChange={handleChangeForHere}
                            aria-label="Platform"
                        >
                            <ToggleButton value={true}>
                                內用
                                <FastfoodIcon sx={{ marginLeft: "4px" }} />
                            </ToggleButton>
                            <ToggleButton value={false}>
                                外帶
                                <LocalMallIcon sx={{ marginLeft: "4px" }} />
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </li>
                    <li>
                        <ToggleButtonGroup
                            color="warning"
                            value={isServe}
                            exclusive
                            onChange={handleChangeServe}
                            aria-label="Platform"
                        >
                            <ToggleButton value={true} disabled={!isForHere}>
                                送餐到桌
                            </ToggleButton>
                            <ToggleButton value={false}>自助取餐</ToggleButton>
                        </ToggleButtonGroup>
                    </li>
                    <li>
                        <ToggleButtonGroup
                            color="warning"
                            value={payWay}
                            exclusive
                            onChange={handleChangePayWay}
                            aria-label="Platform"
                        >
                            <ToggleButton value="mccard">
                                點點卡
                                <SiMcdonalds style={{ marginLeft: "4px" }} />
                            </ToggleButton>
                            <ToggleButton value="credit_card">
                                信用卡
                                <CreditCardIcon sx={{ marginLeft: "4px" }} />
                            </ToggleButton>
                            <ToggleButton value="cash">
                                現金
                                <AttachMoneyIcon sx={{ marginLeft: "4px" }} />
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </li>
                </SettingList>
                <StyledTextField
                    value={textInputValue}
                    onChange={textChangeHandler}
                    placeholder="桌號"
                    show={isServe ? "true" : "false"}
                />
            </SidebarWrap>
            <CheckWrap>
                <CheckTitle>結帳</CheckTitle>
                <ProductWrap>
                    <ul>
                        {cart.map((item) => (
                            <li className="item" key={item.id}>
                                <div className="card">
                                    <div className="img_wrap">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <span className="name">{item.name}</span>
                                    <span className="count">X {item.count}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </ProductWrap>
            </CheckWrap>
        </>
    );
}

export default Check;
