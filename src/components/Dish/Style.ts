import styled, { keyframes } from "styled-components";

const spin = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

export const MenuContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
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

export const MenuTitle = styled.div`
	padding: 20px 0;
	span {
		font-size: 2rem;
		cursor: pointer;
	}
	a {
		text-decoration: none;
		color: black;
		&:hover {
			color: #01df3a;
			transition-duration: 0.2s;
		}
	}
	&:last-child {
		padding-bottom: 4.2rem;
	}
`;
