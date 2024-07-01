import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import Rice from "./components/Menu/Menu";
import Dish from "./components/Dish/Dish";
import Detail from "./components/Detail/Detail";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/:menuType" element={<Rice />} />
			<Route path="/:menuType/:makingType" element={<Dish />} />
			<Route path="/:menuType/:makingType/:id" element={<Detail />} />
		</Routes>
	);
};

export default Router;
