import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";

import { getPokemonDetailsApi } from "../services/pokemon";

import { Header } from "../components/Pokemon/Header";
import { Type } from "../components/Pokemon/Type";
import { Stats } from "../components/Pokemon/Stats";

export const Pokemon = ( props ) => {
	const {
		navigation,
		route: { params }
	} = props;
	const [ pokemon, setPokemon ] = useState( null );

	useEffect(() => {
		navigation.setOptions( {
			headerRight: () => null,
			headerLeft: () => (
				<Icon
					name="arrow-left"
					color="#fff"
					size={ 20 }
					style={ { marginLeft: 20 } }
					onPress={ navigation.goBack }
				/>
			),
		} );
	}, [ navigation, params ]);

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
		<ScrollView>
			<Header
				name={ pokemon.name }
				order={ pokemon.order }
				image={ pokemon.sprites.other["official-artwork"].front_default }
				type={ pokemon.types[0].type.name }
			/>
			<Type types={ pokemon.types } />
			<Stats stats={ pokemon.stats } />
		</ScrollView>
	);
}
