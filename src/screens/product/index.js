import React from "react";
import { Alert, Image, Pressable, StatusBar, View } from "react-native";
import Text from "../../components/text";
import { colors } from "../../theme/colors";
import { styles } from "./styles";

const Product = ({ navigation }) => {
	const alret = (text) =>
		Alert.alert("", text, [
			{
				text: "Go back",
				onPress: () => navigation.goBack(),
				style: "cancel",
			},
			{ text: "OK" },
		]);

	return (
		<>
			<View style={styles.container}>
				<View style={styles.image}>
					<Image source={require("../../../assets/Media.png")} />
				</View>
				<View style={styles.content}>
					<View>
						<Text preset="h2" style={styles.title}>
							Boston Lettuce
						</Text>
					</View>

					<View style={styles.title2}>
						<Text preset="h2">1.10 </Text>
						<Text preset="p" style={{ fontSize: 24 }}>
							€ / piece
						</Text>
					</View>

					<View>
						<Text preset="h5">~ 150 gr / peice</Text>
					</View>

					<View style={styles.subtitle}>
						<Text preset="h3">Spain</Text>
					</View>

					<View>
						<Text preset="p">
							Lettuce is an annual plant of the daisy family, Asteraceae. It is
							most often grown as a leaf vegetable, but sometimes for its stem
							and seeds. Lettuce is most often used for salads, although it is
							also seen in other kinds of food, such as soups, sandwiches and
							wraps; it can also be grilled.
						</Text>
					</View>

					<View style={styles.buttonContainer}>
						<Pressable
							style={[
								styles.button,
								{
									backgroundColor: colors.white,
									paddingHorizontal: 25,
									marginRight: 20,
									borderWidth: 1,
									borderColor: "#D9D0E3",
								},
							]}
							onPress={() => alret("Added to Favorite")}
						>
							<Image source={require("../../../assets/icon/heart.png")} />
						</Pressable>

						<Pressable
							style={[
								styles.button,
								{ backgroundColor: colors.green, color: colors.white, flex: 1 },
							]}
							onPress={() => alret("Added to Cart")}
						>
							<View style={styles.cart}>
								<Image
									source={require("../../../assets/icon/shopping-cart.png")}
								/>
								<Text
									preset="button"
									style={{ color: colors.white, marginLeft: 10 }}
								>
									Add to cart
								</Text>
							</View>
						</Pressable>
					</View>
				</View>
			</View>
			<StatusBar hidden />
		</>
	);
};

export default Product;
