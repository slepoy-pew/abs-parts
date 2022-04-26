import { autoBrands } from "./autoBrands.api";

const autoParts = [
    {
        _id: "67rdca3eeb7f6fgeed47181500",
        number: "000041000",
        name: "СМАЗКА ДЛЯ НАПРАВЛЯЮЩИХ",
        brand: autoBrands.subaru,
        price: 9.13,
        availability: true
    },
    {
        _id: "67rdca3eeb7f6fgeed47181501",
        number: "0411128453",
        name: "РЕМКОМПЛЕКТ ДВИГАТЕЛЯ",
        brand: autoBrands.toyota,
        price: 145.25,
        availability: true
    },
    {
        _id: "67rdca3eeb7f6fgeed47181502",
        number: "042260L020",
        name: "КЛАПАН РЕГУЛИРОВКИ ТНВД",
        brand: autoBrands.toyota,
        price: 75.02,
        availability: true
    },
    {
        _id: "67rdca3eeb7f6fgeed47181503",
        number: "0431328020",
        name: "РЕМКОМПЛЕКТ ЦИЛИНДРА СЦЕПЛЕНИЯ",
        brand: autoBrands.toyota,
        price: 9.76,
        availability: true
    },
    {
        _id: "67rdca3eeb7f6fgeed47181504",
        number: "0435160470",
        name: "НАБОР ПРОКЛАДОК АКПП",
        brand: autoBrands.toyota,
        price: 95.45,
        availability: true
    },
    {
        _id: "67rdca3eeb7f6fgeed47181505",
        number: "0436248010",
        name: "НАБОР САЛЬНИКОВ СТУПИЦЫ",
        brand: autoBrands.toyota,
        price: 21.54,
        availability: true
    },
    {
        _id: "67rdca3eeb7f6fgeed47181506",
        number: "0444632050",
        name: "РЕМКОМПЛЕКТ НАСОСА ГИДРОУСИЛИТЕЛЯ",
        brand: autoBrands.toyota,
        price: 10.06,
        availability: true
    },
    {
        _id: "67rdca3eeb7f6fgeed47181507",
        number: "1000A902",
        name: "РЕМКОМПЛЕКТ ПРОКЛАДОК ДВИГАТЕЛЯ",
        brand: autoBrands.mitsubishi,
        price: 146.5,
        availability: true
    },
    {
        _id: "67rdca3eeb7f6fgeed47181508",
        number: "1011A493",
        name: "КЛАПАН ВЫПУСКНОЙ",
        brand: autoBrands.mitsubishi,
        price: 13.7,
        availability: true
    },
    {
        _id: "67rdca3eeb7f6fgeed47181509",
        number: "10921AA040",
        name: "КЛАПАН КОНТРОЛЯ МАСЛА",
        brand: autoBrands.subaru,
        price: 54.78,
        availability: true
    },
    {
        _id: "67rdca3eeb7f6fgeed47181510",
        number: "11044AA483",
        name: "ПРОКЛАДКА ГОЛОВКИ БЛОКА",
        brand: autoBrands.subaru,
        price: 25.9,
        availability: true
    },
    {
        _id: "67rdca3eeb7f6fgeed47181511",
        number: "1120A178",
        name: "МАХОВИК",
        brand: autoBrands.mitsubishi,
        price: 258.13,
        availability: true
    },
    {
        _id: "67rdca3eeb7f6fgeed47181512",
        number: "12033AB820",
        name: "КОЛЬЦА ПОРШНЕВЫЕ, КОМПЛЕКТ",
        brand: autoBrands.subaru,
        price: 81.34,
        availability: true
    },
    {
        _id: "67rdca3eeb7f6fgeed47181513",
        number: "1210220010",
        name: "ПОДДОН ДВИГАТЕЛЯ",
        brand: autoBrands.toyota,
        price: 83.1,
        availability: true
    },
    {
        _id: "67rdca3eeb7f6fgeed47181514",
        number: "1230A154",
        name: "ФИЛЬТР МАСЛЯНЫЙ",
        brand: autoBrands.mitsubishi,
        price: 16.43,
        availability: true
    },
    {
        _id: "67rdca3eeb7f6fgeed47181515",
        number: "131010W021B0",
        name: "ПОРШЕНЬ ДВИГАТЕЛЯ",
        brand: autoBrands.toyota,
        price: 46.48,
        availability: true
    },
    {
        _id: "67rdca3eeb7f6fgeed47181516",
        number: "20365AG3009L",
        name: "АМОРТИЗАТОР ЗАДНИЙ",
        brand: autoBrands.subaru,
        price: 365.2,
        availability: true
    },
    {
        _id: "67rdca3eeb7f6fgeed47181517",
        number: "2324A080",
        name: "ПОДШИПНИК ВЫЖИМНОЙ",
        brand: autoBrands.mitsubishi,
        price: 70.55,
        availability: true
    },
    {
        _id: "67rdca3eeb7f6fgeed47181518",
        number: "3231A014",
        name: "САЛЬНИК РАЗДАТКИ",
        brand: autoBrands.mitsubishi,
        price: 8.63,
        availability: true
    },
    {
        _id: "67rdca3eeb7f6fgeed47181519",
        number: "4013A444",
        name: "РЫЧАГ ПЕРЕДНИЙ ПРАВЫЙ",
        brand: autoBrands.mitsubishi,
        price: 132.8,
        availability: true
    },
    {
        _id: "67rdca3eeb7f6fgeed47181520",
        number: "4111060832",
        name: "РЕДУКТОР МОСТА",
        brand: autoBrands.toyota,
        price: 844.86,
        availability: true
    },
    {
        _id: "67rdca3eeb7f6fgeed47181521",
        number: "5212842111",
        name: "ЗАГЛУШКА ПТФ ЛЕВАЯ",
        brand: autoBrands.toyota,
        price: 9.93,
        availability: true
    },
    {
        _id: "67rdca3eeb7f6fgeed47181522",
        number: "5702A080",
        name: "ОГРАНИЧИТЕЛЬ ДВЕРИ",
        brand: autoBrands.mitsubishi,
        price: 8.3,
        availability: true
    },
    {
        _id: "67rdca3eeb7f6fgeed47181523",
        number: "57310FJ010",
        name: "ЗАМОК КАПОТА",
        brand: autoBrands.subaru,
        price: 23.24,
        availability: true
    },
    {
        _id: "67rdca3eeb7f6fgeed47181524",
        number: "60879FJ000",
        name: "ПЕТЛЯ БАГАЖНИКА",
        brand: autoBrands.subaru,
        price: 11.62,
        availability: true
    }
];

// export function getBrand() {
// 	return autoBrands;
// }

export function fetchAll() {
    return autoParts;
}
