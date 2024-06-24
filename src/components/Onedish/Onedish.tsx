import React from "react";
import Background from "../Background/Background";
import { useNavigate } from "react-router-dom";
import * as S from "./Style";

const Onedish = () => {
	const navigate = useNavigate();

	return (
		<Background>
			<S.ContentTitle>Select making type</S.ContentTitle>
			<S.MenuContainer>
				<S.SelectMenu onClick={() => navigate("/sidedish/stir-fry")}>
					<S.MenuImg $url="/img/stir-fry.svg" />
					<span>볶기</span>
				</S.SelectMenu>
				<S.SelectMenu onClick={() => navigate("/sidedish/boil")}>
					<S.MenuImg $url="/img/boil.svg" />
					<span>끓이기</span>
				</S.SelectMenu>
				<S.SelectMenu onClick={() => navigate("/sidedish/bake")}>
					<S.MenuImg $url="/img/bake.svg" />
					<span>굽기</span>
				</S.SelectMenu>
				<S.SelectMenu onClick={() => navigate("/sidedish/fry")}>
					<S.MenuImg $url="/img/fry.svg" />
					<span>튀기기</span>
				</S.SelectMenu>
				<S.SelectMenu onClick={() => navigate("/sidedish/steam")}>
					<S.MenuImg $url="/img/steam.svg" />
					<span>찌기</span>
				</S.SelectMenu>
				<S.SelectMenu onClick={() => navigate("/sidedish/guitar")}>
					<S.MenuImg $url="/img/guitar.svg" />
					<span>기타</span>
				</S.SelectMenu>
			</S.MenuContainer>
		</Background>
	);
};

export default Onedish;
