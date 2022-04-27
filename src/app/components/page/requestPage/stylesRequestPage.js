import styled from "styled-components";
import bgImage from "../../../assets/bg_image.jpg";

const StyledRequestPage = styled.div`
    background-image: url(${bgImage});
    /* object-fit: cover;
    height: 100vh; */

	.request_container {
		min-height: 100vh;
        padding: 5rem;
	}
	@media (max-width: 1370px) {
        .request_container {
            padding: 3.5rem;
        }
    }

	.request {
		border-radius: 6px;

        background: linear-gradient(
            135deg,
            rgba(218, 226, 242, 0.2) 0%,
            rgba(99, 188, 212, 0.6) 50%,
            rgba(3, 22, 143, 0.2) 100%
        );
	}
`;

export default StyledRequestPage;
