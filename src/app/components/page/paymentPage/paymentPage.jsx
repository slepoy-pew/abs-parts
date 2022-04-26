import React from "react";
import styled from "styled-components";

const StyledPaymentWrapper = styled.div``;

const PaymentPage = () => {
    return <StyledPaymentWrapper></StyledPaymentWrapper>;
};

export default PaymentPage;

/*
{
	//Для начала создайте какой-нибудь блок, например <div id="fon"></div>. 

	@keyframes animatedBackground {
		0 {
			background-position: 0 0
		}
		100% {
			background-position: -600px 600px  //анимируем свойство background-position 
		}
	}

	// Mozilla Firefox 5.0+ ----
	@-moz-keyframes animatedBackground {
		0 {
			background-position: 0 0
		}
		100% {
			background-position: -600px 600px
		}
	}

	// Safari 4.0+, Chrome 4.0+ ---
	@-webkit-keyframes animatedBackground {
		0 {
			background-position: 0 0
		}
		100% {
			background-position: -600px 600px
		}
	}

	// Opera 12.0+ ---
	@-o-keyframes animatedBackground {
		0 {
			background-position: 0 0
		}
		100% {
			background-position: -600px 600px
		}
	}

	// не нужно использовать префикс -ms, так как свойства keyframes и animation поддерживаются с версии IE10 без префикса ----
	#fon{
		height: 340px;     //задаем произвольную высоту и ширину блока
		width:100%;
		background-image: url('URL вашего фонового изображения');
		animation: animatedBackground 60s linear infinite;
		-moz-animation: animatedBackground 60s linear infinite;
		-webkit-animation: animatedBackground 60s linear infinite;
		-o-animation: animatedBackground 60s linear infinite;

		//так же, как и с @keyframes, префикс -ms тут ни к чему 
	}

	? https://misha.agency/css/animatsiya-fona.html
}
*/
