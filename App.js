import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Home from "./src/screens/home";
import Product from "./src/screens/product";
import { colors } from "./src/theme/colors";

const Stack = createNativeStackNavigator();

function App() {
	return (
		<>
			<SafeAreaView style={styles.container}>
				<NavigationContainer>
					<Stack.Navigator screenOptions={{ headerShown: false }}>
						<Stack.Screen name="Home" component={Home} />
						<Stack.Screen name="Product" component={Product} />
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaView>
			<StatusBar animated backgroundColor={colors.green} />
		</>
	);
}

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
