import React from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import images from "@/assets/images";

export default function () {
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={images.add} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        backgroundColor: "#0555a5",
        width: 60,
        height: 60,
        borderRadius: 70,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: "30%",
        height: "30%",
        resizeMode: "contain"
    }
})
