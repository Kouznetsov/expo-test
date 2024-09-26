import {StyleSheet, View, Text} from "react-native";
import React from "react";
import {LinearGradient} from 'tamagui/linear-gradient'
import AppColors from "@/components/AppColors";

export default function () {

    return (
        <View style={styles.container}>
            <LinearGradient style={styles.background}
                            colors={AppColors.gradientBg}
                            start={[.5, 0]}
                            end={[.5, .5]}/>
            <Text>Journal</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    background: {
        width: "100%",
        height: "100%",
        position: "absolute",
    }
})
