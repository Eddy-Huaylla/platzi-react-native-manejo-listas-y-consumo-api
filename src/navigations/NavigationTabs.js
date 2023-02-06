import React from "react";
import { Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

import { Account } from "../screens/Account";
import { Favorite } from "../screens/Favorite";
import { Pokedex } from "../screens/Pokedex";

const Tab = createBottomTabNavigator();

export const NavigationTabs = () => {

	const renderIcon = ( iconName, color, size ) => {
		return <Icon name={ iconName } color={color} size={size} />
	}

	const renderPokeball = () => {
		return (
			<Image
				source={require("../assets/pokeball.webp")}
				style={{ width: 75, height: 75, top: -15 }}
			/>
		);
	}

	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Favorite"
				component={ Favorite}
				options={{
					tabBarLabel: "Favoritos",
					tabBarIcon: ( { color, size } ) => renderIcon( "heart", color, size )
				}}
			/>

			<Tab.Screen
				name="Pokedex"
				component={ Pokedex }
				options={{
					tabBarLabel: "",
					tabBarIcon: () => renderPokeball()
				}}
			/>

			<Tab.Screen
				name="Account"
				component={ Account }
				options={{
					tabBarLabel: "Mi cuenta",
					tabBarIcon: ( { color, size }) => renderIcon( "user", color, size )
				}}
			/>
		</Tab.Navigator>
	)
}
