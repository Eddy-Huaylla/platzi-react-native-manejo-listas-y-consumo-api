import React, { useEffect } from "react";
import { Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { getPokemonsApi } from "../services/pokemon";

export const Pokedex = () => {
	useEffect(() => {
		( async () => {
			await loadPokemons();
		} )();
	}, []);

	const loadPokemons = async () => {
		try {
			const response = await getPokemonsApi();
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<SafeAreaView>
			<Text>Pokedex</Text>
		</SafeAreaView>
	);
}
