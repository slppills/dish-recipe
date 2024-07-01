import React, { useEffect, useState } from "react";
import Background from "../Background/Background";
import axios from "axios";
import * as S from "./Style";
import { useParams } from "react-router-dom";
import useMenutypeStore from "../../stores/MenutypeStore";
import { Link } from "react-router-dom";
import useDishtypeStore from "../../stores/DishtypeStore";

const Dish = () => {
	const { dishtype, setDishtype } = useDishtypeStore();
	const { makingType } = useParams();
	const [dishType, setDishType] = useState<string>("");
	const { menutype } = useMenutypeStore();

	const DivideType = () => {
		if (makingType === "stir-fry") setDishType("볶기");
		else if (makingType === "boil") setDishType("끓이기");
		else if (makingType === "bake") setDishType("굽기");
		else if (makingType === "fry") setDishType("튀기기");
		else if (makingType === "steam") setDishType("찌기");
		else if (makingType === "etc") setDishType("기타");
	};

	const GetMenu = async () => {
		try {
			const response = await axios.get(
				`https://openapi.foodsafetykorea.go.kr/api/0d7180f7b79e45eca184/COOKRCP01/json/1/1000/RCP_PAT2=${menutype}`,
			);

			const result2 = response.data.COOKRCP01.row;
			if (result2) {
				const filteredResults = result2.filter(
					(res: any) => res.RCP_WAY2 === dishType,
				);
				setDishtype(filteredResults);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		setDishtype("");
		DivideType();
	}, [makingType]);

	useEffect(() => {
		if (dishType) {
			GetMenu();
		}
	}, [dishType]);

	const GetData = () => {
		return (
			<>
				<S.MenuContainer>
					{dishtype.length > 0 ? (
						dishtype.map((list: any) => {
							return (
								<S.MenuTitle key={list.RCP_SEQ}>
									<Link to={`${list.RCP_SEQ}`}>
										<span>{list.RCP_NM}</span>
									</Link>
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
