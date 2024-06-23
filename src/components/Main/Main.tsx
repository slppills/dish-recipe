import { useEffect } from "react";
import Background from "../Background/Background";
import * as S from "./Style";
import { useNavigate } from "react-router-dom";

const Main = () => {
	const navigate = useNavigate();
	// const GetMenu = async () => {
	// 	try {
	// 		const response = await axios.get(
	// 			"http://openapi.foodsafetykorea.go.kr/api/0d7180f7b79e45eca184/COOKRCP01/json/1/1000",
	// 		);
	// 		console.log(response.data);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	useEffect(() => {
		//GetMenu();
	}, []);

	return (
		<>
			<Background>
				<S.ContentTitle>Select dish type</S.ContentTitle>
				<S.MenuContainer>
					<S.SelectMenu onClick={() => navigate("/rice")}>
						<S.MenuImg url="/img/rice.svg" />
						<span>밥</span>
					</S.SelectMenu>
					<S.SelectMenu onClick={() => navigate("/soup")}>
						<S.MenuImg url="/img/soup.svg" />
						<span>국&찌개</span>
					</S.SelectMenu>
					<S.SelectMenu onClick={() => navigate("/sidedish")}>
						<S.MenuImg url="/img/sidedish.svg" />
						<span>반찬</span>
					</S.SelectMenu>
					<S.SelectMenu onClick={() => navigate("/onedish")}>
						<S.MenuImg url="/img/onedish.svg" />
						<span>일품</span>
					</S.SelectMenu>
					<S.SelectMenu onClick={() => navigate("/dessert")}>
						<S.MenuImg url="/img/dessert.svg" />
						<span>후식</span>
					</S.SelectMenu>
					<S.SelectMenu onClick={() => navigate("/etc")}>
						<S.MenuImg url="/img/etc.svg" />
						<span>기타</span>
					</S.SelectMenu>
				</S.MenuContainer>
			</Background>
		</>
	);
};

export default Main;
