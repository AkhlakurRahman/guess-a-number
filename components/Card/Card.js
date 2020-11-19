import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card({ children, cardStyle }) {
	return <View style={{ ...styles.card, ...cardStyle }}>{children}</View>;
}

const styles = StyleSheet.create({
	card: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 6,
		elevation: 6,
		backgroundColor: 'white',
		padding: 20,
		borderRadius: 10,
	},
});
