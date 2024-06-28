import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import Rice from "./components/Menu/Menu";
import Dish from "./components/Dish/Dish";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/:menuType" element={<Rice />} />
			<Route path="/:menuType/:id" element={<Dish />} />
		</Routes>
	);
};

export default Router;
