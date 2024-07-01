import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Dishtype {
	dishtype: any;
	setDishtype: (Dishtype: string) => void;
}

const useDishtypeStore = create(
	persist<Dishtype>(
		(set) => ({
			dishtype: "",
			setDishtype: (newDishtype) => {
				set(() => ({ dishtype: newDishtype }));
			},
		}),
		{
			name: "dishtype-storage",
		},
	),
);

export default useDishtypeStore;
