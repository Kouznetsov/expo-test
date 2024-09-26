import React, {useEffect} from "react";
import {SplashScreen, Stack} from "expo-router";
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native'
import {useColorScheme} from 'react-native'
import {TamaguiProvider} from 'tamagui'
import TamaguiConfig from '../tamagui.config'
import Translator from "@/components/localization/Translator";
import CodeManager from "@/components/Journal/CodeManager";
import {
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    useFonts,
} from '@expo-google-fonts/inter';
import JournalEntriesManager from "@/components/Journal/JournalEntriesManager";


export default function RootLayout() {
    const colorScheme = useColorScheme()
    const [appLoaded, setAppLoaded] = React.useState(false);
    let [fontsLoaded] = useFonts({
        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
        Inter_900Black,
    });

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

    return !appLoaded || !fontsLoaded ? null : (
        <TamaguiProvider config={TamaguiConfig} defaultTheme={colorScheme!}>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <Stack>
                    <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                    <Stack.Screen name={"Journal/home"} options={{headerShown: false}}/>
                    <Stack.Screen name={"Journal/newEntry"}
                                  options={{
                                      presentation: "modal",
                                      title: new Date().toDateString(),
                                  }}/>
                </Stack>
            </ThemeProvider>
        </TamaguiProvider>
    )
}
