import { create } from "zustand";

const useStore = create((set) => ({
	language: "eng",
	switchLanguage: (value) => set({ language: value }),
	pageColors: {
		principal: "#e4dcdc",
		secundario: "#4c5766",
		terciario: "#333536",
		background: "#3b3b3b",
		text: "#000",
	},
	setColors: (value, color) =>
		set((state) => ({ pageColors: { ...state.pageColors, [color]: value } })),
}));

export default useStore;
