import styled from "styled-components";

export const ContentTitle = styled.div`
	font-size: 3rem;
	text-align: center;
`;

export const MenuContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 12% 27%;
	width: 60%;
	height: 90%;
	align-items: center;
	justify-content: center;
`;

export const SelectMenu = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	max-height: 300px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #e6f8e0;
	box-shadow: 26px 24px 40px #cef6ce;
	cursor: pointer;

	&:hover span {
		opacity: 1;
		transition-duration: 0.6s;
	}
	span {
		opacity: 0;
		font-size: 1.7rem;
		margin-top: 0.7rem;
	}
`;

export const MenuImg = styled.div<{ $url: string }>`
	background-image: url(${(props) => props.$url});
	width: 7rem;
	height: 7rem;
	background-position: center;
	background-size: cover;
`;
