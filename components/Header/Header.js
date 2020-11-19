import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../constant/colors';

export default function Header({ headerText }) {
	return (
		<View style={styles.header}>
			<Text style={styles.headerText}>{headerText}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 90,
		paddingTop: 36,
		backgroundColor: Colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
	},

	headerText: {
		color: '#fff',
		fontSize: 18,
	},
});
