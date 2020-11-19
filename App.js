import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/Header';
import StartScreen from './screens/StartScreen';

export default function App() {
	return (
		<View style={styles.container}>
			<Header headerText='Guess a Numberss' />
			<StartScreen />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
