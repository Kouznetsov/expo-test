import {Image, TouchableOpacity, StyleSheet} from "react-native";
import images from "@/assets/images";
import React from "react";
import {useRouter} from "expo-router";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function () {
    const router = useRouter()
    const insets = useSafeAreaInsets()

    return (
        <TouchableOpacity style={[styles.container, {top: insets.top}]} onPress={() => router.back()}>
            <Image style={styles.arrow} source={images.back}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        padding: 13,
        left: 10,
    },
    arrow: {
        width: 30,
        height: 30,
        resizeMode: "contain",
        tintColor: "black",
    }
})
