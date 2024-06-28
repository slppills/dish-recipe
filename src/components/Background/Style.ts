import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: url("/img/background.svg");
	background-size: cover;
	background-position: center;
	min-width: 500px;
	min-height: 500px;
`;

export const ContentBackground = styled.div`
	background-color: rgb(255, 255, 255, 0.95);
	width: 70%;
	height: 85%;
	border-radius: 15px;
`;

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: 4.2rem;
	gap: 3rem;
	position: relative;
	overflow-y: auto;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const HomeImg = styled.div<{ $home: string }>`
	cursor: pointer;
	background-image: url("/img/home.svg");
	position: fixed;
	left: calc(15.12% + 4.2rem);
	width: 2.3rem;
	height: 2.3rem;
	background-size: cover;
	visibility: ${(props) => props.$home};
`;
