import React from "react";
import Background from "../Background/Background";
import * as S from "./Style";
import { useNavigate } from "react-router-dom";

const Dessert = () => {
	const navigate = useNavigate();

	return (
		<Background>
			<S.ContentTitle>Select making type</S.ContentTitle>
			<S.MenuContainer>
				<S.SelectMenu onClick={() => navigate("/dessert/stir-fry")}>
					<S.MenuImg $url="/img/stir-fry.svg" />
					<span>볶기</span>
				</S.SelectMenu>
				<S.SelectMenu onClick={() => navigate("/dessert/boil")}>
					<S.MenuImg $url="/img/boil.svg" />
					<span>끓이기</span>
				</S.SelectMenu>
				<S.SelectMenu onClick={() => navigate("/dessert/bake")}>
					<S.MenuImg $url="/img/bake.svg" />
					<span>굽기</span>
				</S.SelectMenu>
				<S.SelectMenu onClick={() => navigate("/dessert/fry")}>
					<S.MenuImg $url="/img/fry.svg" />
					<span>튀기기</span>
				</S.SelectMenu>
				<S.SelectMenu onClick={() => navigate("/dessert/steam")}>
					<S.MenuImg $url="/img/steam.svg" />
					<span>찌기</span>
				</S.SelectMenu>
			</S.MenuContainer>
		</Background>
	);
};

export default Dessert;
