import React from "react";
import {StyleSheet, View} from "react-native";
import {BottomTabBarProps} from "@react-navigation/bottom-tabs";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import TabBarItem from "@/components/TabBar/TabBarItem";
import TabBarAdd from "@/components/TabBar/TabBarAdd";
import images from "@/assets/images";
import {BottomTabDescriptorMap} from "@react-navigation/bottom-tabs/src/types";

function getIcon(name: string) {
    switch (name) {
        case "index":
            return images.home
        case "journal":
            return images.journal
        case "blog":
            return images.blog
        case "add":
            return images.add
        default:
            return images.dots
    }
}

// This is an abomination, but I didn't have time to figure out how to fetch the actual screen names from here otherwise
function getName(descriptors: BottomTabDescriptorMap, index: number) {
    const values = Object.values(descriptors);


    for (let i = 0; i < values.length; i++) {
        if (i === index)
            return values[i].options.title
    }
    return null;
}

function CustomTabs(props: BottomTabBarProps) {
    const buttons = []

    for (let i = 0; i < props.state.routes.length; i++) {
        const routeName = props.state.routeNames[i]
        const isFocused = i === props.state.index

        if (routeName === "add")
            buttons.push(<TabBarAdd key={"add"}/>)
        else
            buttons.push(<TabBarItem name={getName(props.descriptors, i) || ""}
                                     icon={getIcon(routeName)}
                                     isFocused={isFocused}
                                     onPress={() => {
                                         isFocused || props.navigation.navigate(routeName)
                                     }}
                                     key={routeName}
            />)

    }

    return buttons
}

export default function TabBar(props: BottomTabBarProps) {
    const insets = useSafeAreaInsets()


    return (
        <View style={[styles.background, {paddingBottom: insets.bottom}]}>
            <View style={styles.container}>
                <CustomTabs {...props} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        width: "100%",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    container: {
        height: 70,
        width: "100%",
        flexDirection: "row",
    }
});
