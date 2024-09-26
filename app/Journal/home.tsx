import React, {useCallback, useState,} from "react";
import {FlatList, Platform, SafeAreaView, SafeAreaView as savrn, StyleSheet, View} from "react-native";
import {translate} from "@/components/localization/Translator";
import AddButton from "@/components/Journal/AddButton";
import {Stack, useFocusEffect, useRouter} from "expo-router";
import BlueBg from "@/components/BlueBg";
import JournalEntriesManager from "@/components/Journal/JournalEntriesManager";
import HomeListItem from "@/components/Journal/HomeListItem";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function Home() {
    const router = useRouter()
    const [entries, setEntries] = useState([...JournalEntriesManager.entries])
    const insets = useSafeAreaInsets()

    useFocusEffect(useCallback(() => {
        setEntries([...JournalEntriesManager.entries])
    }, []))

    return (
        <View style={style.container}>
            <Stack.Screen options={{
                headerTitle: translate("journal"),

            }}/>
            <BlueBg/>
            {
                // Transparent objects in android are considered as non-existing.
                // Thus the horror below.
                // (If the header is transparent, android considers it to be missing, cf rootLayout)
            }
            <SafeAreaView style={{flex: 1, paddingTop: Platform.OS === "android" ? insets.top + 50 : 0}}>
                <FlatList
                    data={entries} renderItem={(item) =>
                    <HomeListItem entry={item.item}
                                  onRemovePress={() => {
                                      JournalEntriesManager.removeEntry(item.item.title)
                                      setEntries([...JournalEntriesManager.entries])
                                  }}
                                  onPress={() => {
                                      router.push({
                                          pathname: "/Journal/newEntry", params: {
                                              title: item.item.title,
                                              text: item.item.text,
                                              uris: JSON.stringify(item.item.uris),
                                          }
                                      })
                                  }}/>}/>
                <AddButton onPress={() => {
                    router.push("/Journal/newEntry")
                }}/>
            </SafeAreaView>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 30,
        marginTop: 7,
        fontWeight: "bold",
        alignSelf: "center"
    },
})
