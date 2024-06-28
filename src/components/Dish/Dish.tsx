import React, { useEffect, useState } from "react";
import Background from "../Background/Background";
import axios from "axios";
import * as S from "./Style";
import { useLocation } from "react-router-dom";
import useMenutypeStore from "../../stores/MenutypeStore";

const Dish = () => {
	const [result, setResult] = useState<any[]>([]);
	const location = useLocation();
	const [dishtype, setDishtype] = useState<string>("");
	const { menutype } = useMenutypeStore();

	const DivideType = () => {
		if (location.pathname.endsWith("stir-fry")) setDishtype("볶기");
		else if (location.pathname.endsWith("boil")) setDishtype("끓이기");
		else if (location.pathname.endsWith("bake")) setDishtype("굽기");
		else if (location.pathname.endsWith("fry")) setDishtype("튀기기");
		else if (location.pathname.endsWith("steam")) setDishtype("찌기");
		else if (location.pathname.endsWith("guitar")) setDishtype("기타");
	};

	const GetMenu = async () => {
		console.log(menutype);
		try {
			const response = await axios.get(
				`http://openapi.foodsafetykorea.go.kr/api/0d7180f7b79e45eca184/COOKRCP01/json/1/1000/RCP_PAT2=${menutype}`,
			);

			const result2 = response.data.COOKRCP01.row;
			if (result2) {
				const filteredResults = result2.filter(
					(res: any) => res.RCP_WAY2 === dishtype,
				);
				setResult(filteredResults);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		DivideType();
	}, [location]);

	useEffect(() => {
		GetMenu();
	}, [dishtype]);

	const GetData = () => {
		return (
			<>
				<S.MenuContainer>
					{result.length > 0 ? (
						result.map((list) => {
							return (
								<S.MenuTitle key={list.RCP_SEQ}>
									<span>{list.RCP_NM}</span>
								</S.MenuTitle>
							);
						})
					) : (
						<S.SpinContainer>
							<S.Spinner />
						</S.SpinContainer>
					)}
				</S.MenuContainer>
			</>
		);
	};

	return <Background>{GetData()}</Background>;
};

export default Dish;
