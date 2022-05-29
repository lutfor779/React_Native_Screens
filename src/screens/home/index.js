import React from "react";
import { Alert, Image, Pressable, View } from "react-native";
import Text from "../../components/text";
import { colors } from "../../theme/colors";
import { styles } from "./styles";

const alret = () => Alert.alert("", "You clicked dismiss");

const Home = () => {
	return (
		<View style={styles.container}>
			<View style={styles.image}>
				<View style={styles.logo}>
					<View style={styles.logoContent}>
						<Image source={require("../../assets/icon/D.png")} />
					</View>
				</View>
			</View>
			<View style={styles.content}>
				<View style={styles.image2}>
					<View style={styles.logo2}>
						<View style={styles.logoContent}>
							<Image source={require("../../assets/icon/Box.png")} />
						</View>
					</View>
				</View>
				<View>
					<Text preset="h1" style={styles.title}>
						Non-Contact Deliveries
					</Text>
					<Text preset="p" style={styles.text}>
						When placing an order, select the option “Contactless delivery” and
						the courier will leave your order at the door.
					</Text>
				</View>

				<Pressable
					style={styles.button1}
					onPress={() => console.log("clicked")}
				>
					<Text preset="button" style={{ color: colors.white }}>
						Order Now
					</Text>
				</Pressable>

				<Pressable style={styles.button2} onPress={alret}>
					<Text preset="button" style={{ color: colors.gray }}>
						dismiss
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default Home;
