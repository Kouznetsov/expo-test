import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useCallback} from "react";
import {translate} from "@/components/localization/Translator";
import images from "@/assets/images";
import AppColors from "@/components/AppColors";
import {useFocusEffect, useRouter} from "expo-router";

export default function () {
    const router = useRouter();
    const goToJournal = () => router.push("/Journal/home")

    return (
        <View style={styles.container}>
            <View/>
            <View style={styles.diaryContainer}>
                <Image source={images.diary} style={styles.diaryImage}/>
            </View>
            <View style={styles.textsContainer}>
                <Text style={styles.title}>{translate("protectJournalTitle")}</Text>
                <Text style={styles.description}>{translate("protectJournalDescription")}</Text>
            </View>
            <View style={{width: "100%"}}>
                <TouchableOpacity style={styles.buttonBackground} onPress={goToJournal}>
                    <Text style={styles.buttonText}>{translate("activate")}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToJournal} style={{padding: 10, justifyContent: "center", alignItems: "center"}}>
                    <Text style={[styles.buttonText, {color: AppColors.blue}]}>{translate("later")}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        paddingHorizontal: 20,
        alignItems: "center",
        paddingBottom: 30,
    },
    diaryContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: 130,
        height: 130,
        borderRadius: 130,
        backgroundColor: "rgba(255,255,255,0.15)",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "rgba(255,255,255,0.2)",
    },
    diaryImage: {
        width: "30%",
        height: "30%"
    },
    textsContainer: {
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        color: "black",
    },
    description: {
        marginTop: 5,
        textAlign: "center",
        fontSize: 15,
        color: "gray"
    },
    buttonBackground: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        width: "100%",
        borderRadius: 15,
        backgroundColor: AppColors.blue
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    }
})
