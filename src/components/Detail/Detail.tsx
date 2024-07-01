import React, { useEffect, useRef, useState } from "react";
import Background from "../Background/Background";
import useDishtypeStore from "../../stores/DishtypeStore";
import { useParams } from "react-router-dom";
import * as S from "./Style";
import { Link } from "react-router-dom";

const Detail = () => {
	const { dishtype } = useDishtypeStore();
	const url = useParams();
	const [recipetoggle, setRecipetoggle] = useState<boolean>(false);
	const modal = useRef<HTMLDivElement>(null);
	const [dishname, setDishname] = useState<string>();
	const [dishmanual, setDishmanual] = useState<string[]>([]);
	const [dishmanualImg, setDishmanualImg] = useState<string[]>([]);

	const clickOutside = (e: any) => {
		if (
			recipetoggle &&
			modal.current &&
			!modal.current.contains(e.target)
		) {
			setRecipetoggle(false);
		}
	};

	useEffect(() => {
		const setManual = () => {
			const filteredDish = dishtype.filter(
				(dish: any) => dish.RCP_SEQ === url.id,
			);

			if (filteredDish.length > 0) {
				setDishname(filteredDish[0].RCP_NM);

				console.log(filteredDish);

				let cnt = 1;
				const manuals = [];
				const manualImgs = [];

				while (true) {
					const step =
						filteredDish[0][
							`MANUAL${String(cnt).padStart(2, "0")}`
						];
					const stepImg =
						filteredDish[0][
							`MANUAL_IMG${String(cnt).padStart(2, "0")}`
						];

					if (!step && !stepImg) break;

					manuals.push(step);
					manualImgs.push(stepImg);

					cnt++;
				}
				setDishmanual(manuals);
				setDishmanualImg(manualImgs);
			}
		};

		if (dishtype.length > 0) {
			setManual();
		}
	}, []);

	const DishDetail = () => {
		const filteredDish = dishtype.filter(
			(dish: any) => dish.RCP_SEQ === url.id,
		);

		console.log(filteredDish);

		return (
			<>
				<S.DetailContainer>
					<S.ExplainDish>
						<Link
							to={filteredDish[0].ATT_FILE_NO_MK}
							target="_blank"
						>
							<S.DishImage
								$url={filteredDish[0].ATT_FILE_NO_MK}
							/>
						</Link>
						<S.DishInfo>
							<S.DishName>
								<span>{filteredDish[0].RCP_NM}</span>
							</S.DishName>
							<S.MakingTip>
								<span>
									저감 요리법 Tip :{" "}
									{filteredDish[0].RCP_NA_TIP !== ""
										? filteredDish[0].RCP_NA_TIP
										: "없음"}
								</span>
							</S.MakingTip>
							<S.GotoRecipe>
								<span
									onClick={() =>
										setRecipetoggle(!recipetoggle)
									}
								>
									레시피 보러가기
								</span>
							</S.GotoRecipe>
						</S.DishInfo>
					</S.ExplainDish>
					<S.InfoContainer>
						<S.NutritionWrapper>
							<S.Nutrition>
								<span>영양 정보</span>
							</S.Nutrition>
							<S.NutritionInfo>
								<span>열량 : {filteredDish[0].INFO_ENG}g</span>
								<span>
									탄수화물 : {filteredDish[0].INFO_CAR}g
								</span>
								<span>
									단백질 : {filteredDish[0].INFO_PRO}g
								</span>
								<span>지방 : {filteredDish[0].INFO_FAT}g</span>
								<span>나트륨 : {filteredDish[0].INFO_NA}g</span>
							</S.NutritionInfo>
						</S.NutritionWrapper>
						<S.MaterialWrapper>
							<S.Material>
								<span>재료</span>
							</S.Material>
							{filteredDish[0].RCP_PARTS_DTLS.split(", ").map(
								(material: any) => {
									return (
										<S.MaterialInfo key={material}>
											<span>{material}</span>
										</S.MaterialInfo>
									);
								},
							)}
						</S.MaterialWrapper>
					</S.InfoContainer>
				</S.DetailContainer>
			</>
		);
	};

	return (
		<>
			{recipetoggle && (
				<S.RecipeWrap onClick={clickOutside}>
					<S.RecipeContainer ref={modal}>
						<S.RecipeName>
							<span>{dishname}</span>
						</S.RecipeName>
						<S.ManualContainer>
							{dishmanual.map((manual, index) => {
								return (
									<S.ManualBox key={index}>
										<S.Manual>
											<span>{manual}</span>
										</S.Manual>
										<Link
											to={dishmanualImg[index]}
											target="_blank"
										>
											<S.ManualImg
												$url={dishmanualImg[index]}
											/>
										</Link>
									</S.ManualBox>
								);
							})}
						</S.ManualContainer>
					</S.RecipeContainer>
				</S.RecipeWrap>
			)}
			<Background>{DishDetail()}</Background>
		</>
	);
};

export default Detail;
