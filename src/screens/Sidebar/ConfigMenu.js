import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { Icon } from "@rneui/base";
import { MAIN_COLOR, MAIN_COLOR_BLUE, MAIN_COLOR_GRAY, MAIN_COLOR_GREEN, MAIN_COLOR_RED } from "../../constant";
import { useNavigation } from "@react-navigation/native";
import MainContext from "../../contexts/MainContext";

const ConfigMenu = (props) => {
	const state = useContext(MainContext);
	const navigation = useNavigation();
	const MENU_LIST = {
		Loader: [
			{
				img: require("../../../assets/images/Picture10.png"),
				label: "Бүтээлийн бус ажиллах",
				nav: "NAV_PATH",
				isMore: true,
				borderColor: MAIN_COLOR_GREEN
			},
			{
				img: require("../../../assets/images/Picture11.png"),
				label: "Саатал",
				nav: "NAV_PATH",
				isMore: true,
				borderColor: MAIN_COLOR_BLUE
			},
			{
				img: require("../../../assets/images/Picture12.png"),
				label: "Сул зогсолт",
				nav: "NAV_PATH",
				isMore: true,
				borderColor: MAIN_COLOR
			},
			{
				img: require("../../../assets/images/Picture13.png"),
				label: "Эвдрэл",
				nav: "NAV_PATH",
				isMore: true,
				borderColor: MAIN_COLOR_RED
			}
		],
		Truck: [
			{
				img: require("../../../assets/images/Picture10.png"),
				label: "Бүтээлийн бус ажиллах",
				nav: "NAV_PATH",
				isMore: true,
				borderColor: MAIN_COLOR_GREEN
			},
			{
				img: require("../../../assets/images/Picture11.png"),
				label: "Саатал",
				nav: "NAV_PATH",
				isMore: true,
				borderColor: MAIN_COLOR_BLUE
			},
			{
				img: require("../../../assets/images/Picture12.png"),
				label: "Сул зогсолт",
				nav: "NAV_PATH",
				isMore: true,
				borderColor: MAIN_COLOR
			},
			{
				img: require("../../../assets/images/Picture13.png"),
				label: "Эвдрэл",
				nav: "NAV_PATH",
				isMore: true,
				borderColor: MAIN_COLOR_RED
			}
		],
		Other: [
			{
				img: require("../../../assets/images/Picture10.png"),
				label: "Бүтээлийн бус ажиллах",
				nav: "NAV_PATH",
				isMore: true,
				borderColor: MAIN_COLOR_GREEN
			},
			{
				img: require("../../../assets/images/Picture11.png"),
				label: "Саатал",
				nav: "NAV_PATH",
				isMore: true,
				borderColor: MAIN_COLOR_BLUE
			},
			{
				img: require("../../../assets/images/Picture12.png"),
				label: "Сул зогсолт",
				nav: "NAV_PATH",
				isMore: true,
				borderColor: MAIN_COLOR
			},
			{
				img: require("../../../assets/images/Picture13.png"),
				label: "Эвдрэл",
				nav: "NAV_PATH",
				isMore: true,
				borderColor: MAIN_COLOR_RED
			}
		]
	};

	return (
		<View>
			<Text>ТОхиргоо</Text>
			{/* https://chatgpt.com/share/67a5cf70-7c60-8013-af37-7e2d50f59fc7 */}
		</View>
	);
};

export default ConfigMenu;

const styles = StyleSheet.create({
	eachMenuContainer: {
		flexDirection: "row",
		alignItems: "center",
		borderBottomColor: MAIN_COLOR_GRAY,
		borderBottomWidth: 1,
		paddingHorizontal: 10,
		height: 60
	}
});
