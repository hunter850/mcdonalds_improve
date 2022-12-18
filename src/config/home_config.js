import bigMc from "@/assets/big_mac.jfif";
import doubleCheeseBurger from "@/assets/double-cheese-burger_832x822_product-header-desktop.jfif";
import bltAngus from "@/assets/blt_angus_beef_burger.jfif";
import bltChicken from "@/assets/blt_grilled_chicken_burger.jfif";
import bltSpicyChicken from "@/assets/blt_spicy_chicken_burger.jfif";
import filetOFish from "@/assets/filet_o_fish.jfif";
import gridChicken from "@/assets/grilled_bbq_chicken_burger.jfif";
import mcchicken from "@/assets/mcchicken.jfif";
import mushroomAngus from "@/assets/mushroom_angus_beef_burger.jfif";
import caesarSaladChicken from "@/assets/caesar-salad-with-spicy-fried-chicken-filet_832x822_product-header-desktop.jfif";
// category
import breakfask from "@/assets/category_breakfast.jfif";
import combo from "@/assets/category_combo.jfif";
import oneOrder from "@/assets/category_order.jfif";
// breakfast
import eggMcMuffin from "@/assets/egg-mcmuffin_832x822_product-header-desktop.jfif";
import sausageEggMuffin from "@/assets/sausage-mcmuffin-with-egg_832x822_product-header-desktop.jfif";
import vegetablesMufinn from "@/assets/muffin-with-vegetables_832x822_product-header-desktop.jfif";
import eggBurgur from "@/assets/egg-burger_832x822_product-header-desktop.jfif";
import eggSausageBurgur from "@/assets/egg-burger-with-sausage_832x822_product-header-desktop.jfif";
import eggBaconBurgur from "@/assets/egg-burger-with-canadian-bacon_832x822_product-header-desktop.jfif";
import sausagePancake from "@/assets/hotcakes-with-sausage_832x822_product-header-desktop.jfif";
import bigBreakfast from "@/assets/big-breakfast_832x822_product-header-desktop.jfif";
import bagelCheeseBurgur from "@/assets/bagel-burger-with-cheese_832x822_product-header-desktop.jfif";
import plainBagel from "@/assets/plain-bagel_832x822_product-header-desktop.jfif";
// order
import sweetPotato from "@/assets/sweet-potato_832x822_product-header-desktop.jfif";
import frenchFriesSmall from "@/assets/french-fries-small_832x822_product-header-desktop.jfif";
import hashBrowns from "@/assets/hash-browns_832x822_product-header-desktop.jfif";
import spicyChickenWing2 from "@/assets/spicy-chicken-wing-2-pieces_832x822_product-header-desktop.jfif";
import tenderChickenWing2 from "@/assets/tender-chicken-wing-2-pieces_832x822_product-header-desktop.jfif";
import applePie from "@/assets/apple-pie_832x822_product-header-desktop.jfif";
import cornSoup from "@/assets/corn-soup-small_832x822_product-header-desktop.jfif";
import icecream from "@/assets/ice-cream-cone_832x822_product-header-desktop.jfif";
import mcflurry from "@/assets/mcflurry_832x822_product-header-desktop.jfif";
import chickenMcnuggets4 from "@/assets/chicken-mcnuggets-4-pieces_832x822_product-header-desktop.jfif";

export const categoryWidth = "300px";

export const categoryImages = [
    { id: 1, name: "早餐", image: breakfask, value: "breakfast" },
    { id: 2, name: "超值全餐", image: combo, value: "combo" },
    { id: 3, name: "單點", image: oneOrder, value: "order" },
];

export const mainImages = [
    { id: 1, name: "大麥克", image: bigMc, inCart: false, count: 0 },
    { id: 2, name: "雙層牛肉吉事堡", image: doubleCheeseBurger, inCart: false, count: 0 },
    { id: 3, name: "BLT 安格斯牛肉堡", image: bltAngus, inCart: false, count: 0 },
    { id: 4, name: "BLT 嫩煎鷄腿堡", image: bltChicken, inCart: false, count: 0 },
    { id: 5, name: "BLT 辣脆鷄腿堡", image: bltSpicyChicken, inCart: false, count: 0 },
    { id: 6, name: "麥香魚", image: filetOFish, inCart: false, count: 0 },
    { id: 7, name: "嫩煎鷄腿堡", image: gridChicken, inCart: false, count: 0 },
    { id: 8, name: "麥香鷄", image: mcchicken, inCart: false, count: 0 },
    { id: 9, name: "蕈菇安格斯牛肉堡", image: mushroomAngus, inCart: false, count: 0 },
    { id: 10, name: "凱撒辣脆鷄沙拉", image: caesarSaladChicken, inCart: false, count: 0 },
];

export const breakfastImages = [
    { id: 1, name: "滿福堡", image: eggMcMuffin, inCart: false, count: 0 },
    { id: 2, name: "豬肉滿福堡加蛋", image: sausageEggMuffin, inCart: false, count: 0 },
    { id: 3, name: "青蔬滿福堡", image: vegetablesMufinn, inCart: false, count: 0 },
    { id: 4, name: "吉事蛋堡", image: eggBurgur, inCart: false, count: 0 },
    { id: 5, name: "豬肉蛋堡", image: eggSausageBurgur, inCart: false, count: 0 },
    { id: 6, name: "火腿蛋堡", image: eggBaconBurgur, inCart: false, count: 0 },
    { id: 7, name: "豬肉鬆餅", image: sausagePancake, inCart: false, count: 0 },
    { id: 8, name: "經典大早餐", image: bigBreakfast, inCart: false, count: 0 },
    { id: 9, name: "起司番茄嫩蛋焙果堡", image: bagelCheeseBurgur, inCart: false, count: 0 },
    { id: 10, name: "現烤焙果", image: plainBagel, inCart: false, count: 0 },
];

export const orderImages = [
    { id: 1, name: "金黃地瓜條", image: sweetPotato, inCart: false, count: 0 },
    { id: 2, name: "薯條", image: frenchFriesSmall, inCart: false, count: 0 },
    { id: 3, name: "薯餅", image: hashBrowns, inCart: false, count: 0 },
    { id: 4, name: "勁辣香鷄翅(2塊)", image: spicyChickenWing2, inCart: false, count: 0 },
    { id: 5, name: "酥嫩鷄翅(2塊)", image: tenderChickenWing2, inCart: false, count: 0 },
    { id: 6, name: "蘋果派", image: applePie, inCart: false, count: 0 },
    { id: 7, name: "玉米濃湯", image: cornSoup, inCart: false, count: 0 },
    { id: 8, name: "蛋捲冰淇淋", image: icecream, inCart: false, count: 0 },
    { id: 9, name: "冰炫風(OREO)", image: mcflurry, inCart: false, count: 0 },
    { id: 10, name: "麥克鷄塊(4塊)", image: chickenMcnuggets4, inCart: false, count: 0 },
];
