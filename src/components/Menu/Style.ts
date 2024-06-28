import { styled, keyframes } from "styled-components";

const spin = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

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

export const SelectMenu = styled.div<{ display: string }>`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	max-height: 15rem;
	border-radius: 10px;
	display: ${(props) => props.display};
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

export const SpinContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

export const Spinner = styled.div`
	width: 100px;
	height: 100px;
	border: 10px solid #a9f5a9;
	border-top-color: #01df3a;
	border-radius: 100%;
	animation: ${spin} linear 0.8s infinite;
`;
