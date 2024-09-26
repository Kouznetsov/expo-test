import React, {useEffect} from "react";
import {Stack, useLocalSearchParams, useRouter} from 'expo-router';
import PublishButton from "@/components/Journal/PublishButton";
import {Image, StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import {translate} from "@/components/localization/Translator";
import NewEntryButton from "@/components/Journal/NewEntryBottomButton";
import images from "@/assets/images";
import * as ImagePicker from 'expo-image-picker';
import {MediaTypeOptions} from 'expo-image-picker';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import JournalEntriesManager from "@/components/Journal/JournalEntriesManager";
import {useCameraPermissions} from "expo-camera";

function getTitle(): string {
    return `${new Date().toDateString()} ${new Date().toTimeString()}`
}

export default function () {
    const [currentText, setCurrentText] = React.useState("");
    const [mediaList, setMediaList] = React.useState<string[]>([]);
    const [headerTitle, setHeaderTitle] = React.useState(getTitle);
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const params = useLocalSearchParams();
    const [permission, requestPermission] = useCameraPermissions();

    useEffect(() => {
        if (params !== null) {
            // Never used Router (nor Expo). This is ****PROBABLY**** not the way to pass parameters.
            params.text && setCurrentText(params.text as string)
            params.uris && setMediaList(JSON.parse(params.uris.toString()))
            params.title && setHeaderTitle(params.title as string)
        }
    }, []);

    const onCameraPress = async () => {
        requestPermission()
        if (permission && permission.granted) {
            ImagePicker.launchCameraAsync({
                mediaTypes: MediaTypeOptions.Images,
            }).then((result) => {
                if (!result.canceled) {
                    setMediaList([...mediaList, ...result.assets.map(a => a.uri)])
                }
            })
        }
    }

    const onLibraryPress = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setMediaList([...mediaList, ...result.assets.map(a => a.uri)])
        }
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                headerTitle: headerTitle,
                headerRight: () => <PublishButton onPress={() => {
                    JournalEntriesManager.inputEntry({
                        uris: mediaList,
                        text: currentText,
                        title: headerTitle
                    })
                    router.back()
                }} disabled={currentText.trim().length === 0}/>
            }}/>

            <View style={styles.content}>
                <View style={styles.media}>
                    {
                        mediaList && mediaList.map(uri =>
                            <TouchableOpacity
                                key={uri}
                                onPress={() => setMediaList(mediaList.toSpliced(mediaList.indexOf(uri), 1))}>
                                <Image source={{uri: uri}} style={{width: 100, height: 100}}/>
                            </TouchableOpacity>)
                    }
                </View>
                <TextInput style={styles.input}
                           blurOnSubmit
                           value={currentText}
                           returnKeyType={"done"}
                           placeholder={translate("entryPlaceholder")}
                           multiline={true}
                           onChangeText={setCurrentText}/>
            </View>
            <View style={[styles.bottomBar, {bottom: insets.bottom}]}>
                <NewEntryButton onPress={onLibraryPress}
                                image={images.picture}/>
                <NewEntryButton onPress={onCameraPress}
                                image={images.camera}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: .5,
    },
    input: {
        width: "100%",
        fontSize: 20,
        padding: 20,
    },
    bottomBar: {
        width: "100%",
        alignItems: "center",
        position: "absolute",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    media: {
        flexDirection: "row",
        flexWrap: "wrap"
    }
})
