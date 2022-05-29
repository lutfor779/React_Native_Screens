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
	content: {
		backgroundColor: colors.light,
		flex: 1,
		borderTopRightRadius: 25,
		borderTopLeftRadius: 25,
		paddingHorizontal: 20,
	},
	title: {
		paddingTop: 30,
	},
	title2: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 12,
	},
	subtitle: {
		marginTop: 20,
		marginBottom: 15,
	},
	buttonContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	button: {
		paddingVertical: 16,
		borderRadius: 8,
		marginTop: 35,
		marginBottom: 20,
	},
	cart: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
});
