import React from "react";
import * as S from "./Style";
import Background from "../Background/Background";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const Rice = () => {
	const navigate = useNavigate();

	// const GetMenu = async () => {
	// 	try {
	// 		const response = await axios.get(
	// 			"http://openapi.foodsafetykorea.go.kr/api/0d7180f7b79e45eca184/COOKRCP01/json/1/1000/RCP_PAT2=기타",
	// 		);
	// 		const result = response.data.COOKRCP01.row;
	// 		console.log(result);
	// 		let boil = 0;
	// 		let bake = 0;
	// 		let guitar = 0;
	// 		let boggi = 0;
	// 		result.map((res: any) => {
	// 			if (res.RCP_WAY2 === "끓이기") {
	// 				boil += 1;
	// 			} else if (res.RCP_WAY2 === "기타") {
	// 				guitar += 1;
	// 			} else if (res.RCP_WAY2 === "굽기") {
	// 				bake += 1;
	// 			} else if (res.RCP_WAY2 === "볶기") {
	// 				boggi += 1;
	// 			}
	// 		});
	// 		console.log(
	// 			boil,
	// 			guitar,
	// 			bake,
	// 			boggi,
	// 			boil + guitar + bake + boggi,
	// 		);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// useEffect(() => {
	// 	GetMenu();
	// }, []);

	return (
		<>
			<Background>
				<S.ContentTitle>Select making type</S.ContentTitle>
				<S.MenuContainer>
					<S.SelectMenu onClick={() => navigate("/rice/stir-fry")}>
						<S.MenuImg $url="/img/stir-fry.svg" />
						<span>볶기</span>
					</S.SelectMenu>
					<S.SelectMenu onClick={() => navigate("/rice/boil")}>
						<S.MenuImg $url="/img/boil.svg" />
						<span>끓이기</span>
					</S.SelectMenu>
					<S.SelectMenu onClick={() => navigate("/rice/bake")}>
						<S.MenuImg $url="/img/bake.svg" />
						<span>굽기</span>
					</S.SelectMenu>
					<S.SelectMenu onClick={() => navigate("/rice/fry")}>
						<S.MenuImg $url="/img/fry.svg" />
						<span>튀기기</span>
					</S.SelectMenu>
					<S.SelectMenu onClick={() => navigate("/rice/steam")}>
						<S.MenuImg $url="/img/steam.svg" />
						<span>찌기</span>
					</S.SelectMenu>
					<S.SelectMenu onClick={() => navigate("/rice/guitar")}>
						<S.MenuImg $url="/img/guitar.svg" />
						<span>기타</span>
					</S.SelectMenu>
				</S.MenuContainer>
			</Background>
		</>
	);
};

export default Rice;
