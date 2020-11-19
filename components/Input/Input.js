import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function Input(props) {
	return (
		<View>
			<TextInput {...props} style={{ ...styles.input, ...props.inputStyle }} />
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 30,
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
		marginVertical: 10,
	},
});
