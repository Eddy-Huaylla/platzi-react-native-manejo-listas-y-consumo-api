import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonDetailsApi } from "../services/pokemon";

export const Pokemon = ( props ) => {
	const {
		navigation,
		route: { params }
	} = props;
	const [ pokemon, setPokemon ] = useState( null );

	useEffect( () => {
		( async () => {
			try {
				const response = await getPokemonDetailsApi( params.id );
				setPokemon(response);
			} catch (error) {
				console.error( error );
				navigation.goBack();
			}
		} )();
	}, [ params ] );

	if ( !pokemon ) return null;

	return (
		<SafeAreaView>
			<Text>Estamos en un POKEMON</Text>
			<Text>{ pokemon.name }</Text>
		</SafeAreaView>
	);
}
