import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Pokemon = ( props ) => {
	const { navigation, route } = props;

	console.log(route);
	console.log(navigation);

	return (
		<SafeAreaView>
			<Text>Pokemon</Text>
		</SafeAreaView>
	);
}
