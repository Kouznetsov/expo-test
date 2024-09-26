import React, {useEffect} from "react";
import {SplashScreen, Stack} from "expo-router";
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native'
import {useColorScheme} from 'react-native'
import {TamaguiProvider} from 'tamagui'
import TamaguiConfig from '../tamagui.config'
import Translator from "@/components/localization/Translator";
import CodeManager from "@/components/Journal/CodeManager";

import JournalEntriesManager from "@/components/Journal/JournalEntriesManager";
import {RootSiblingParent} from "react-native-root-siblings";

export default function RootLayout() {
    const colorScheme = useColorScheme()
    const [appLoaded, setAppLoaded] = React.useState(false);

    useEffect(() => {
        Promise.all([
            Translator.init(),
            CodeManager.init(),
            JournalEntriesManager.init()
        ]).then(() => {
            setAppLoaded(true);
            SplashScreen.hideAsync()
        })
    }, []);

    return !appLoaded ? null : (
        <RootSiblingParent>
            <TamaguiProvider config={TamaguiConfig} defaultTheme={colorScheme!}>
                <ThemeProvider value={DefaultTheme}>
                    <Stack>
                        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                        <Stack.Screen name={"Journal/home"} options={{headerShown: true, headerTransparent: true}}/>
                        <Stack.Screen name={"Journal/newEntry"}
                                      options={{
                                          presentation: "modal",
                                          title: new Date().toDateString(),
                                      }}/>
                    </Stack>
                </ThemeProvider>
            </TamaguiProvider>
        </RootSiblingParent>
    )
}
