import React, {useCallback, useState} from "react";
import {FlatList, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {translate} from "@/components/localization/Translator";
import BackArrow from "@/components/BackArrow";
import AddButton from "@/components/Journal/AddButton";
import {useFocusEffect, useRouter} from "expo-router";
import BlueBg from "@/components/BlueBg";
import JournalEntriesManager from "@/components/Journal/JournalEntriesManager";
import HomeListItem from "@/components/Journal/HomeListItem";


export default function Home() {
    const router = useRouter()
    const [entries, setEntries] = useState([...JournalEntriesManager.entries])

    useFocusEffect(useCallback(() => {
        setEntries([...JournalEntriesManager.entries])
    }, []))

    return (
        <View style={style.container}>
            <BlueBg/>
            <SafeAreaView style={{flex: 1}}>
                <BackArrow/>
                <Text style={style.title}>{translate("journal")}</Text>
                <FlatList data={entries} renderItem={(item) =>
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
        fontFamily: "Inter",
        fontWeight: "bold",
        alignSelf: "center"
    },
})
