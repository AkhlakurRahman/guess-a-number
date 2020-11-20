import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../constant/colors';

export default function NumberContainer({ children }) {
	return (
		<View style={styles.numberContainer}>
			<Text style={styles.number}>{children}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	numberContainer: {
		borderWidth: 2,
		borderColor: Colors.accent,
		padding: 10,
		borderRadius: 10,
		marginVertical: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},

	number: {
		color: Colors.accent,
		fontSize: 20,
	},
});
