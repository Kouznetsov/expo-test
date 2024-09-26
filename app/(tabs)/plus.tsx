import {Button, FlatList, StyleSheet} from "react-native";
import React from "react";
import Translator from "@/components/localization/Translator";
import {useRouter} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";

export default function () {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <FlatList renderItem={(item) => {
                return <Button title={item.item} onPress={() => {
                    Translator.switchLanguage(item.item).then(() => {
                        router.navigate("/")
                    })
                }}/>
            }} data={Translator.availableLocales()}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
