import trimStr from "./trimStr";
import newLineToSpace from "./newLineToSpace";

function classNames(...arg) {
    const stringArray = [];
    for (let i = 0; i < arg.length; i++) {
        const item = arg[i];
        if (typeof item === "string" && trimStr(newLineToSpace(item)) !== "") {
            stringArray.push(trimStr(newLineToSpace(item)));
        } else if (Array.isArray(item)) {
            if (item.length) {
                stringArray.push(classNames.apply(null, item));
            }
        } else if (typeof item === "object" && item.toString === Object.prototype.toString) {
            for (let key in item) {
                if (item[key] && trimStr(key) !== "") {
                    stringArray.push(trimStr(key));
                }
            }
        }
    }
    return stringArray.join(" ");
}

export default classNames;
