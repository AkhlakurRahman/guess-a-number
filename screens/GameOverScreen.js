import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Card from '../components/Card/Card';
import Colors from '../constant/colors';

export default function GameOverScreen({
	userNumber,
	guessRound,
	restartNewGame,
}) {
	return (
		<View style={styles.screen}>
			<Card cardStyle={styles.gameOver}>
				<Text style={styles.gameOverText}>Game Over!</Text>
				<Text style={{ color: 'white' }}>It took you {guessRound} tries</Text>
				<Text style={{ color: 'white' }}>The number was {userNumber}</Text>
				<Button
					title='New Game'
					onPress={restartNewGame}
					color={Colors.primary}
				/>
			</Card>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	gameOverText: {
		fontSize: 25,
		padding: 10,
		fontFamily: 'open-sans-bold',
		color: 'white',
	},

	gameOver: {
		alignItems: 'center',
		justifyContent: 'space-between',
		width: 300,
		maxWidth: '80%',
		height: 200,
		backgroundColor: Colors.accent,
	},
});
