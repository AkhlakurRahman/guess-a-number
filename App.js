import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartScreen from './screens/StartScreen';

const loadFonts = () => {
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	});
};

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [guessRound, setGuessRound] = useState(0);
	const [fontsLoaded, setFontsLoaded] = useState(false);

	if (!fontsLoaded) {
		return (
			<AppLoading
				startAsync={loadFonts}
				onFinish={() => setFontsLoaded(true)}
				onError={(error) => console.log(error)}
			/>
		);
	}

	const restartNewGame = () => {
		setGuessRound(0);
		setUserNumber(null);
	};

	const startGameHandler = (selectedNumber) => {
		setUserNumber(selectedNumber);
		setGuessRound(0);
	};

	const gameOverHandler = (numberOfRounds) => {
		setGuessRound(numberOfRounds);
	};

	let current = <StartScreen startGameHandler={startGameHandler} />;

	if (userNumber && guessRound <= 0) {
		current = (
			<GameScreen usersChoice={userNumber} gameOverHandler={gameOverHandler} />
		);
	} else if (guessRound > 0) {
		current = (
			<GameOverScreen
				userNumber={userNumber}
				guessRound={guessRound}
				restartNewGame={restartNewGame}
			/>
		);
	}

	return (
		<View style={styles.container}>
			<Header headerText='Guess a Number' />
			{current}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
