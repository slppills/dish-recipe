import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Menutype {
	menutype: string;
	setMenutype: (Menutype: string) => void;
}

const useMenutypeStore = create(
	persist<Menutype>(
		(set) => ({
			menutype: "",
			setMenutype: (newMenutype) => {
				set(() => ({ menutype: newMenutype }));
			},
		}),
		{
			name: "menutype-storage",
		},
	),
);

export default useMenutypeStore;
