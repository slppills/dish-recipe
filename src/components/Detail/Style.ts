import styled from "styled-components";

export const DetailContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3rem;
	width: 100%;
`;

export const RecipeWrap = styled.div`
	background-color: rgb(0, 0, 0, 0.5);
	position: absolute;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1;
`;

export const RecipeContainer = styled.div`
	background-color: white;
	width: 70%;
	height: 85%;
	border-radius: 15px;
	padding: 4.2rem;
	display: flex;
	flex-direction: column;
	gap: 3rem;
	overflow-y: auto;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const RecipeName = styled.div`
	text-align: center;
	span {
		font-size: 2.5rem;
	}
`;

export const ManualContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5rem;
`;

export const ManualBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const Manual = styled.div`
	span {
		font-size: 1.5rem;
	}
`;

export const ManualImg = styled.div<{ $url: string }>`
	background-image: url(${(props) => props.$url});
	width: 24rem;
	height: 18rem;
	background-size: cover;
	cursor: pointer;
`;

export const ExplainDish = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8%;
`;

export const DishImage = styled.div<{ $url: string }>`
	background-image: url(${(props) => props.$url});
	width: 18rem;
	height: 13.5rem;
	background-size: cover;
	cursor: pointer;
`;

export const DishInfo = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	gap: 1.2rem;
`;

export const DishName = styled.h1`
	span {
		font-size: 2.4rem;
	}
`;

export const MakingTip = styled.div`
	span {
		font-size: 1.6rem;
	}
`;

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 65%;
`;

export const NutritionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	border: 5px solid #01df3a;
	border-radius: 20px;
	padding: 1.2rem;
	gap: 1rem;
`;

export const Nutrition = styled.div`
	span {
		font-size: 1.6rem;
		color: orange;
	}
`;

export const NutritionInfo = styled.div`
	display: flex;
	justify-content: space-between;
	span {
		font-size: 1.4rem;
	}
`;

export const MaterialWrapper = styled.div`
	width: 100%;
	border: 5px solid #01df3a;
	border-radius: 20px;
	padding: 1.2rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const Material = styled.div`
	span {
		font-size: 1.7rem;
		color: orange;
	}
`;

export const MaterialInfo = styled.div`
	span {
		font-size: 1.5rem;
	}
`;

export const GotoRecipe = styled.div`
	span {
		font-size: 1.7rem;
		color: #01df3a;
		cursor: pointer;
	}
`;
