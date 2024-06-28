import Background from "../Background/Background";
import * as S from "./Style";
import { useNavigate } from "react-router-dom";

const Main = () => {
	const navigate = useNavigate();

	return (
		<>
			<Background>
				<S.ContentTitle>Select menu type</S.ContentTitle>
				<S.MenuContainer>
					<S.SelectMenu onClick={() => navigate("/rice")}>
						<S.MenuImg $url="/img/main/rice.svg" />
						<span>밥</span>
					</S.SelectMenu>
					<S.SelectMenu onClick={() => navigate("/soup")}>
						<S.MenuImg $url="/img/main/soup.svg" />
						<span>국&찌개</span>
					</S.SelectMenu>
					<S.SelectMenu onClick={() => navigate("/sidedish")}>
						<S.MenuImg $url="/img/main/sidedish.svg" />
						<span>반찬</span>
					</S.SelectMenu>
					<S.SelectMenu onClick={() => navigate("/onedish")}>
						<S.MenuImg $url="/img/main/onedish.svg" />
						<span>일품</span>
					</S.SelectMenu>
					<S.SelectMenu onClick={() => navigate("/dessert")}>
						<S.MenuImg $url="/img/main/dessert.svg" />
						<span>후식</span>
					</S.SelectMenu>
					<S.SelectMenu onClick={() => navigate("/etc")}>
						<S.MenuImg $url="/img/main/etc.svg" />
						<span>기타</span>
					</S.SelectMenu>
				</S.MenuContainer>
			</Background>
		</>
	);
};

export default Main;
