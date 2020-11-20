import React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '../../constant/colors';
import BodyText from '../BodyText/BodyText';

export default function Header({ headerText }) {
	return (
		<View style={styles.header}>
			<BodyText style={styles.headerText}>{headerText}</BodyText>
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
		fontSize: 20,
	},
});
