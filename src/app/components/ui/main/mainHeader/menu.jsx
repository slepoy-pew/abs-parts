import React from "react";
import PropTypes from "prop-types";
import { StyledMenuWrapper } from "../../../page/mainPage/stylesMainPage/stylesHeader";
import { StyledBlur } from "../../../page/mainPage/stylesMainPage/stylesHeader";
import MenuList from "./menuList";

const Menu = ({ active, setActive }) => {
    const itemLinks = [
        {
            id: "1",
            class: "link",
            path: "/payment",
            name: "ОПЛАТА И ПРАВИЛА ВОЗВРАТА"
        },
        {
            id: "2",
            class: "link",
            path: "/contacts",
            name: "КОНТАКТЫ И РЕКВИЗИТЫ"
        },
        { id: "3", class: "link", path: "/vacancies", name: "ВАКАНСИИ" },
        { id: "4", class: "link", path: "/about", name: "О КОМПАНИИ" }
    ];

    return (
        <StyledMenuWrapper active={active} onClick={() => setActive(false)}>
            <StyledBlur />
            <MenuList active={active} itemLinks={itemLinks} />
        </StyledMenuWrapper>
    );
};

Menu.propTypes = {
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired
};

export default Menu;

/*
Клиентам
Акции
Скидки
Спецпредложения
Мобильное приложение
Подарочные сертификаты
Видеоинструкции
Как сделать заказ
Способы оплаты
Способы возврата оплаты
Условия доставки
Условия работы для клиентов
Компания
Новости
Вакансии
Магазины
Про нас
Франшиза Автодок
Реклама на сайте
*/
