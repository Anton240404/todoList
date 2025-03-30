"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarGroup = AvatarGroup;
const react_1 = __importDefault(require("react"));
const avatar_module_css_1 = __importDefault(require("./avatar.module.css"));
// Стейт нужен, если данные будут меняться, если нам необходимо,
// что то отрисовать без изменений данных, стейт не нужен.
const getInitials = (x) => {
    return `${x.firstName[0]}${x.lastName[0]}`;
};
function getInitials2(firstName, lastName) {
    return `${firstName[0]}${lastName[0]}`;
}
const colors = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#95a5a6'];
const getInvisibleCount2 = (items, visibleCount) => {
    if (items.length > visibleCount) {
        return items.length - visibleCount;
    }
    else {
        return 0;
    }
};
const getInvisibleCount3 = (itemsCount, visibleCount) => {
    if (itemsCount > visibleCount) {
        return itemsCount - visibleCount;
    }
    else {
        return 0;
    }
};
const names = ['A', 'B', 'C'];
function countNames(names) {
    console.log(`В массиве ${names.length} имен`);
}
countNames(names);
function AvatarGroup(props) {
    const getCount = () => {
        if (props.items.length > props.visibleCount) {
            return props.items.length - props.visibleCount;
        }
        else {
            return 0;
        }
    };
    return (react_1.default.createElement("div", { className: avatar_module_css_1.default.root },
        props.items.slice(0, props.visibleCount).map((item, i) => (react_1.default.createElement("div", { className: avatar_module_css_1.default.avatar, key: i, style: { backgroundColor: colors[i % colors.length] } }, item.url ? (react_1.default.createElement("img", { src: item.url, alt: `${item.firstName} ${item.lastName}`, className: avatar_module_css_1.default.avatarImage })) : (getInitials2(item.firstName, item.lastName))))),
        getInvisibleCount3(props.items, props.visibleCount) > 0 && (react_1.default.createElement("div", { className: avatar_module_css_1.default.avatar, style: {
                backgroundColor: colors[props.visibleCount % colors.length],
            } },
            "+",
            getInvisibleCount3(props.items, props.visibleCount)))));
}
//Сделать заново все
// 1) Отрисовать все круги
// 1.1) Если firstName и lastName иначе <img src="url" /> или через bg-image
// 2) Отрисовать первые visibleCount кругов
// 3) Узнать, сколько не отрисовали (+6)
// 4) Нарисовать +6 (если неотрисованных > 0)
// <AvatarGroup
// items={[
//  {url: 'https://example.com', firstName: '', lastName: '' }
//  {url: '', firstName: 'Иван', lastName: 'Иванов' }
// ]}
//  visibleCount={6}
//  />
