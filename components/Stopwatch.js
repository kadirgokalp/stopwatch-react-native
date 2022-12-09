import { SafeAreaView, View, Text, StyleSheet, Button } from "react-native"
import Header from "./Header"
// import { HStack, VStack } from "native-base"
function Stopwatch() {
	return (
		<View style={styles.container}>
			<Header style={styles.headerContainer} />
			<View style={styles.stopwatchContainer}>
				<Text style={styles.timeProperties}>00:00:00:00</Text>
			</View>

			<View style={styles.timeContentContainer}>
				<Text>Time Content</Text>
			</View>

			<View>
				<Text>Buttons</Text>
				<Button title="Start" />
				<Button title="Stop" />
				<Button title="Clear" />
			</View>
		</View>
	)
}

export default Stopwatch

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		marginTop: 50,
		padding: 10,
	},

	headerContainer: {
		flex: 1,
		height: "10%",
		backgroundColor: "#333",
	},
	stopwatchContainer: {
		height: 130,
		width: "100%",
		borderRadius: 10,
		marginTop: 20,
		borderColor: "#931414",
	},
	timeContentContainer: {
		height: "50%",
		backgroundColor: "#3c3c3c",
	},

	timeProperties: {
		textAlign: "center",
		fontSize: 60,
	},
})
