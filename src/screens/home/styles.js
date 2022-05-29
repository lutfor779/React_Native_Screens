import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.violet,
	},
	image: {
		height: "35%",
	},
	logo: {
		height: 63,
		width: 63,
		backgroundColor: colors.lightgreen,
		borderRadius: 31,
		marginLeft: 20,
		marginTop: 63,
	},
	logoContent: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	content: {
		backgroundColor: colors.light,
		flex: 1,
		borderTopRightRadius: 25,
		borderTopLeftRadius: 25,
	},
	image2: {
		alignItems: "center",
		paddingTop: 60,
	},
	logo2: {
		height: 104,
		width: 104,
		backgroundColor: colors.white,
		borderRadius: 52,
	},
	title: {
		marginTop: 20,
		paddingHorizontal: 44,
		textAlign: "center",
	},
	text: {
		paddingHorizontal: 20,
		textAlign: "center",
		marginTop: 20,
	},
	button1: {
		marginHorizontal: 20,
		paddingVertical: 16,
		backgroundColor: colors.green,
		color: colors.white,
		borderRadius: 8,
		marginTop: 35,
		marginBottom: 20,
	},
	button2: {},
});
