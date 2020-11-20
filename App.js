import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header/Header';
import GameScreen from './screens/GameScreen';
import StartScreen from './screens/StartScreen';

export default function App() {
	const [userNumber, setUserNumber] = useState();

	const startGameHandler = (selectedNumber) => {
		setUserNumber(selectedNumber);
	};

	let current = <StartScreen startGameHandler={startGameHandler} />;

	if (userNumber) {
		current = <GameScreen usersChoice={userNumber} />;
	}

	return (
		<View style={styles.container}>
			<Header headerText='Guess a Numberss' />
			{current}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
