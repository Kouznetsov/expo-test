import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import React from "react";
import images from "@/assets/images";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import AppColors from "@/components/AppColors";

interface Props {
    onPress: () => void
}

export default function(props: Props) {
    const insets = useSafeAreaInsets()

    return (
        <TouchableOpacity style={[styles.container, {bottom: insets.bottom + 50}]} onPress={props.onPress}>
            <Image style={styles.plus} source={images.add} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 70,
        justifyContent: "center",
        alignItems: "center",
        height: 70,
        position: "absolute",
        backgroundColor: AppColors.blue,
        borderRadius: 50,
        right: 20
    },
    plus: {
        width: 20,
        height: 20,
        resizeMode: "contain",
        tintColor: "white"
    }
})
