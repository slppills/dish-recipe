import { create } from "zustand";

interface Menutype {
	menutype: string;
	setMenutype: (Menutype: string) => void;
}

const useMenutypeStore = create<Menutype>((set) => ({
	menutype: "",
	setMenutype: (newMenutype) => {
		set(() => ({ menutype: newMenutype }));
	},
}));

export default useMenutypeStore;
