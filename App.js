import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { MainStore } from "./src/contexts/MainContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MainStackNavigator } from "./src/navigations/MainStackNavigation";
import "./reanimatedConfig";
import { useEffect } from "react";
import { createTable } from "./src/helper/db";
import { NetworkProvider } from "./src/contexts/NetworkContext";

export default function App() {
	useEffect(() => {
		createTable();
	}, []);

	return (
		<SafeAreaProvider>
			<NetworkProvider>
				<NavigationContainer>
					<MainStore>
						<MainStackNavigator />
					</MainStore>
				</NavigationContainer>
			</NetworkProvider>
		</SafeAreaProvider>
	);
}
//4158421d-2088-43c6-81e6-b0a85beafc07
