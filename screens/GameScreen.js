import React, { useRef, useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card/Card';
import NumberContainer from '../components/NumberContainer/NumberContainer';

const generateRandomBetween = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);

	const randomNumber = Math.floor(Math.random() * (max - min)) + min;

	if (randomNumber === exclude) {
		return generateRandomBetween(min, max, exclude);
	}

	return randomNumber;
};

export default function GameScreen({ usersChoice }) {
	const [currentGuess, setCurrentGuess] = useState(
		generateRandomBetween(1, 100, usersChoice)
	);

	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	const handleNextGuess = (direction) => {
		if (
			(direction === 'lower' && currentGuess < usersChoice) ||
			(direction === 'higher' && currentGuess > usersChoice)
		) {
			Alert.alert("Don't lie!", 'You know this is wrong!', [
				{ text: 'Sorry!', style: 'cancel' },
			]);
			return;
		}

		if (direction === 'lower') {
			currentHigh.current = currentGuess;
		} else {
			currentLow.current = currentGuess;
		}

		const nextNumber = generateRandomBetween(
			currentLow.current,
			currentHigh.current,
			currentGuess
		);

		setCurrentGuess(nextNumber);
	};

	return (
		<View style={styles.screen}>
			<Card cardStyle={styles.game}>
				<Text>Oppenent's Guess</Text>
				<NumberContainer>{currentGuess}</NumberContainer>
				<View style={styles.buttonContainer}>
					<Button title='Lower' onPress={() => handleNextGuess('lower')} />
					<Button title='Higher' onPress={() => handleNextGuess('higher')} />
				</View>
			</Card>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},

	game: {
		alignItems: 'center',
	},

	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
		width: 300,
		maxWidth: '80%',
	},
});
