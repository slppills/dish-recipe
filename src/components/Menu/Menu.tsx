import React, { useEffect, useState } from "react";
import * as S from "./Style";
import Background from "../Background/Background";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import useMenutypeStore from "../../stores/MenutypeStore";

const Menu = () => {
	const navigate = useNavigate();
	const { menuType } = useParams();
	const { setMenutype } = useMenutypeStore();
	const [typeofmenu, setTypeofmenu] = useState<string>();
	const [countMenu, setCountMenu] = useState({
		stir_fry: 0,
		boil: 0,
		bake: 0,
		fry: 0,
		steam: 0,
		etc: 0,
	});

	const DivideMenu = () => {
		if (menuType === "rice") setTypeofmenu("밥");
		else if (menuType === "soup") setTypeofmenu("국");
		else if (menuType === "sidedish") setTypeofmenu("반찬");
		else if (menuType === "onedish") setTypeofmenu("일품");
		else if (menuType === "dessert") setTypeofmenu("후식");
		else if (menuType === "etc") setTypeofmenu("기타");
	};

	const GetMenu = async () => {
		let cnt_stir_fry = 0;
		let cnt_boil = 0;
		let cnt_bake = 0;
		let cnt_fry = 0;
		let cnt_steam = 0;
		let cnt_etc = 0;

		try {
			const response = await axios.get(
				`https://openapi.foodsafetykorea.go.kr/api/0d7180f7b79e45eca184/COOKRCP01/json/1/1000/RCP_PAT2=${typeofmenu}`,
			);
			const result = response.data.COOKRCP01.row;

			if (result) {
				result.map((res: any) => {
					if (res.RCP_WAY2 === "끓이기") cnt_boil++;
					else if (res.RCP_WAY2 === "볶기") cnt_stir_fry++;
					else if (res.RCP_WAY2 === "굽기") cnt_bake++;
					else if (res.RCP_WAY2 === "튀기기") cnt_fry++;
					else if (res.RCP_WAY2 === "찌기") cnt_steam++;
					else cnt_etc++;
				});
			}

			setCountMenu({
				...countMenu,
				stir_fry: cnt_stir_fry,
				boil: cnt_boil,
				bake: cnt_bake,
				fry: cnt_fry,
				steam: cnt_steam,
				etc: cnt_etc,
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		DivideMenu();
	}, [menuType]);

	useEffect(() => {
		if (typeofmenu) {
			setMenutype(typeofmenu);
			GetMenu();
		}
	}, [typeofmenu]);

	return (
		<>
			<Background>
				<S.ContentTitle>Select making type</S.ContentTitle>

				{countMenu.stir_fry === 0 &&
				countMenu.boil === 0 &&
				countMenu.bake === 0 &&
				countMenu.fry === 0 &&
				countMenu.stir_fry === 0 &&
				countMenu.steam === 0 &&
				countMenu.etc === 0 ? (
					<S.SpinContainer>
						<S.Spinner />
					</S.SpinContainer>
				) : (
					<S.MenuContainer>
						<S.SelectMenu
							onClick={() => navigate(`/${menuType}/stir-fry`)}
							display={countMenu.stir_fry > 0 ? "flex" : "none"}
						>
							<S.MenuImg $url="/img/stir-fry.svg" />
							<span>볶기</span>
						</S.SelectMenu>
						<S.SelectMenu
							onClick={() => navigate(`/${menuType}/boil`)}
							display={countMenu.boil > 0 ? "flex" : "none"}
						>
							<S.MenuImg $url="/img/boil.svg" />
							<span>끓이기</span>
						</S.SelectMenu>
						<S.SelectMenu
							onClick={() => navigate(`/${menuType}/bake`)}
							display={countMenu.bake > 0 ? "flex" : "none"}
						>
							<S.MenuImg $url="/img/bake.svg" />
							<span>굽기</span>
						</S.SelectMenu>
						<S.SelectMenu
							onClick={() => navigate(`/${menuType}/fry`)}
							display={countMenu.fry > 0 ? "flex" : "none"}
						>
							<S.MenuImg $url="/img/fry.svg" />
							<span>튀기기</span>
						</S.SelectMenu>
						<S.SelectMenu
							onClick={() => navigate(`/${menuType}/steam`)}
							display={countMenu.steam > 0 ? "flex" : "none"}
						>
							<S.MenuImg $url="/img/steam.svg" />
							<span>찌기</span>
						</S.SelectMenu>
						<S.SelectMenu
							onClick={() => navigate(`/${menuType}/etc`)}
							display={countMenu.etc > 0 ? "flex" : "none"}
						>
							<S.MenuImg $url="/img/guitar.svg" />
							<span>기타</span>
						</S.SelectMenu>
					</S.MenuContainer>
				)}
			</Background>
		</>
	);
};

export default Menu;
