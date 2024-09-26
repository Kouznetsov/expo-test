import {SafeAreaView, StyleSheet, View} from "react-native";
import React from "react";
import CodeManager from "@/components/Journal/CodeManager";
import JournalCodeInput from "@/components/Journal/JournalCodeInput";
import JournalNoCode from "@/components/Journal/JournalNoCode";
import BlueBg from "@/components/BlueBg";

export default function () {

    return (
        <View style={styles.container}>
            <BlueBg />
            <SafeAreaView style={styles.safeArea}>
                {
                    CodeManager.hasCode() ? <JournalCodeInput/> : <JournalNoCode/>
                }
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    safeArea: {
        flex: 1,
    },
    background: {
        width: "100%",
        height: "100%",
        position: "absolute",
    }
})
