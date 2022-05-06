import React, { useState, useEffect } from "react";
import StyledSearchPage from "./stylesSearchPage";
import api from "../../../api";
import SearchElements from "../../ui/searchElements";
import BackButton from "../../common/backButton";
import CallOrderBtn from "../../common/callOrderBtn/callOrderBtn";
import RequestBtn from "../../common/requestBtn/RequestBtn";

const SearchPage = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        setParts(api.autoParts.fetchAll());
    }, []);

    return (
        <StyledSearchPage>
        	<div className="search_container">
                <div className="search">
					<div className="searchText-one">
						<span className="line-one first">
							На нашем складе всегда вналичии более 5 000 тысяч позиций.
						</span>
						<span className="line-one second">
							Введите номер детали в поисковой строке, а ниже в таблице отобразится результат. 
						</span>
						<span className="line-one third">
							Также доступен фильтр по маркам и сортировка табличных данных.
						</span>
					</div>
                    <SearchElements parts={parts} />
					<div className="searchText-two">
						<span className="line-two">
							Но если "поиск по номеру" не привёл к желаемому результату, 
							то Вы можете "ЗАКАЗАТЬ ЗВОНОК",
						</span>
						<span  className="line-two">
							наш специалист перезвонит Вам и проконсультирует 
							по срокам доставки, цене и другим вопросам,
						</span>
						<span className="line-two">
							либо Вы можете отправить "ЗАПРОС ПО VIN" и 
							наш специалисть также ответит Вам.
						</span>
					</div>
					<div className="search-button">
						<BackButton />
						<CallOrderBtn />
						<RequestBtn />
					</div>
                </div>
            </div>
        </StyledSearchPage>
    );
};

export default SearchPage;
