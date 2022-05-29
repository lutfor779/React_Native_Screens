import { colors } from "../theme/colors";

const BASE = {
	fontSize: 17,
};

const TITLE = {
	fontSize: 30,
	fontWeight: "700",
	color: colors.black,
};

const SUBTITLE = {
	fontSize: 22,
	fontWeight: "700",
	color: colors.black,
};

const LARGE = {
	fontSize: 34,
	fontWeight: "700",
	color: colors.black,
};

export const presets = {
	default: {
		...BASE,
		color: colors.black,
		fontWeight: "400",
	},
	h1: {
		...LARGE,
	},
	h2: {
		...TITLE,
	},
	h3: {
		...SUBTITLE,
	},
	h5: {
		...BASE,
		color: colors.green,
		fontWeight: "500",
	},
	p: {
		...BASE,
		color: colors.gray,
	},
	button: {
		...BASE,
		fontWeight: "600",
		textTransform: "uppercase",
		textAlign: "center",
	},
};
