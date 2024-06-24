import React from "react";
import Background from "../Background/Background";
import * as S from "./Style";
import { useNavigate } from "react-router-dom";

const Soup = () => {
	const navigate = useNavigate();

	return (
		<Background>
			<S.ContentTitle>Select making type</S.ContentTitle>
			<S.MenuContainer>
				<S.SelectMenu onClick={() => navigate("/soup/boil")}>
					<S.MenuImg $url="/img/boil.svg" />
					<span>끓이기</span>
				</S.SelectMenu>
				<S.SelectMenu onClick={() => navigate("/soup/guitar")}>
					<S.MenuImg $url="/img/guitar.svg" />
					<span>기타</span>
				</S.SelectMenu>
			</S.MenuContainer>
		</Background>
	);
};

export default Soup;
