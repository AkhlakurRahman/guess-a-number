import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Card from '../components/Card/Card';
import Input from '../components/Input/Input';
import Colors from '../constant/colors';

export default function StartScreen() {
	return (
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
				/>

				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title='Reset' color={Colors.accent} />
					</View>
					<View style={styles.button}>
						<Button title='Confirm' color={Colors.primary} />
					</View>
				</View>
			</Card>
		</View>
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
});
