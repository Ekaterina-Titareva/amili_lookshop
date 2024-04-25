export function createData(size, size34, size36, size38, size40, size42, size44, size46, size48, size50, size52) {
    return {size, size34, size36, size38, size40, size42, size44, size46, size48, size50, size52};
}

export const rows = [
    createData('Обхват груди, см', 80, 84, 88, 92, 96, 100, 104, 110, 116, 122),
    createData('Обхват талии, см', 62,	66,	70,	74,	78,	82,	86,	92,	98,	104),
    createData('Обхват бедер, см', 86, 90,	94,	98,	102, 106, 110, 116, 122, 128),
    createData('Длина рукава, см', 59, 59, 60, 60, 61, 61, 61, 61, 62, 92),
    createData('Охват верхней части руки, см', 26, 27, 28, 29, 30, 31, 32, 34, 36, 38),
    createData('Ширина спины, см', 33.5, 34.5, 35.5, 36.5, 37.5, 38.5, 39.5, 41, 42.5, 44),
];

export const navLinks = [
    {id: "home_link", value: "Главная", href: "/"},
    {id: "about_link", value: "О нас", href: "/about"},
    {id: "categories_link", value: "Категории", href: "/categories"},
    {id: "goods_link", value: "Все товары", href: "/allGoods"},
    {id: "questions_link", value: "Частые вопросы", href: "/questions"},
    {id: "private_link", value: "Политика конфиденциальности", href: "/privacyPolicy"}
]