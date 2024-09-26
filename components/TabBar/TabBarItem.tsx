import {Image, ImageProps, StyleSheet, Text, TouchableOpacity} from "react-native";
import React from "react";
import AppColors from "@/components/AppColors";

interface Props {
    name?: string
    icon: ImageProps
    onPress: () => void
    isFocused: boolean
}

export default function TabBarItem(props: Props) {

    return (
        <TouchableOpacity style={[styles.container, {opacity: props.isFocused ? 1 : .3}]}
                          onPress={props.onPress}>
            <Image source={props.icon} style={styles.icon}/>
            <Text style={styles.text}>{props.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flex: 1,
        alignItems: "center",
        paddingTop: 15
    },
    icon: {
        tintColor: AppColors.tabBarPrimary,
        height: "50%",
        resizeMode: "contain"
    },
    text: {
        marginTop: 7,
        color: AppColors.tabBarPrimary
    }
})
