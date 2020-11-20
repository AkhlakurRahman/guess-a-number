import React, { useState } from 'react';
import {
	Alert,
	Button,
	Keyboard,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from 'react-native';

import Card from '../components/Card/Card';
import Input from '../components/Input/Input';
import NumberContainer from '../components/NumberContainer/NumberContainer';
import Colors from '../constant/colors';

export default function StartScreen({ startGameHandler }) {
	const [enteredValue, setEnteredValue] = useState('');
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState();

	const numberInputHandler = (inputNumber) => {
		setEnteredValue(inputNumber.replace(/[^0-9]/g, ''));
	};

	const resetPressHandler = () => {
		setEnteredValue('');
		setConfirmed(false);
		Keyboard.dismiss();
	};

	const confirmPressHandler = () => {
		const chosenNumber = parseInt(enteredValue);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert('Invalid Number!', 'Number has to be between 1-99', [
				{ text: 'Okay', style: 'destructive', onPress: resetPressHandler },
			]);

			return;
		}

		setConfirmed(true);
		setSelectedNumber(chosenNumber);
		setEnteredValue('');
		Keyboard.dismiss();
	};

	let confirmedOutput;

	if (confirmed) {
		confirmedOutput = (
			<Card cardStyle={styles.summaryContainer}>
				<Text>You've Entered</Text>
				<NumberContainer>{selectedNumber}</NumberContainer>
				<Button
					title='Start Game'
					onPress={() => startGameHandler(selectedNumber)}
				/>
			</Card>
		);
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.screen}>
				<Text style={styles.title}>Start a New Game!</Text>
				<Card cardStyle={styles.inputContainer}>
					<Text>Select a Number</Text>
					<Input
						inputStyle={styles.input}
						blurOnSubmit
						autoCapitalize='none'
						autoCorrect={false}
						keyboardType='numeric'
						maxLength={2}
						onChangeText={numberInputHandler}
						value={enteredValue}
					/>

					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							<Button
								onPress={resetPressHandler}
								title='Reset'
								color={Colors.accent}
							/>
						</View>
						<View style={styles.button}>
							<Button
								onPress={confirmPressHandler}
								title='Confirm'
								color={Colors.primary}
							/>
						</View>
					</View>
				</Card>
				{confirmedOutput}
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		padding: 10,
	},

	title: {
		fontSize: 20,
		marginVertical: 10,
		fontFamily: 'open-sans-bold',
	},

	inputContainer: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center',
	},

	input: {
		width: 50,
		textAlign: 'center',
	},

	buttonContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
	},

	button: {
		width: 80,
	},

	summaryContainer: {
		marginTop: 20,
		alignItems: 'center',
	},
});
