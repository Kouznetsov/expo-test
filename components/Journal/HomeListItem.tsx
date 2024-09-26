import {ListRenderItemInfo, StyleSheet, Text, View, Image, TouchableOpacity, FlatList} from "react-native";
import {JournalEntry} from "@/components/Journal/JournalEntry";
import React from "react";
import images from "@/assets/images";
import AppColors from "@/components/AppColors";
import {useRouter} from "expo-router";

interface Props {
    entry: JournalEntry,
    onPress: () => void
    onRemovePress: () => void
}

export default function (props: Props) {
    const router = useRouter();

    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <View style={styles.headerContainer}>
                <View style={styles.titleContainer}>
                    <Image style={styles.calendarIcon} source={images.calendar}/>
                    <Text style={styles.title}>{props.entry.title}</Text>
                </View>
                <TouchableOpacity onPress={props.onRemovePress}>
                    <Image style={styles.remove} source={images.remove}/>
                </TouchableOpacity>
            </View>
            <View style={styles.separator}/>
            <View style={{
                justifyContent: "center",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>
                {props.entry.uris.map(uri => <Image source={{uri: uri}}
                                                     style={{width: 100, height: 100}}
                                                     key={uri}/>)}
            </View>
            <Text style={styles.text}>{props.entry.text} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 8
    },
    separator: {
        width: "100%",
        height: 1,
        backgroundColor: AppColors.lightGrey
    },
    headerContainer: {
        margin: 10,
        paddingRight: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    titleContainer: {
        backgroundColor: AppColors.lightGrey,
        padding: 10,
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 10,
    },
    remove: {
        width: 30,
        height: 30,
    },
    title: {
        color: "black",
        fontWeight: "bold",
    },
    calendarIcon: {
        width: 10,
        height: 10,
        marginRight: 8
    },
    text: {
        margin: 15,
        fontSize: 15,
        fontWeight: "bold"
    }
})
