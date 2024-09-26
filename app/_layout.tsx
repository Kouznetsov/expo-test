import React, {useEffect} from "react";
import {Stack} from "expo-router";
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native'
import {useColorScheme} from 'react-native'
import {TamaguiProvider} from 'tamagui'
import TamaguiConfig from '../tamagui.config'
import Translator from "@/components/localization/Translator";

export default function RootLayout() {
    const colorScheme = useColorScheme()
    const [appLoaded, setAppLoaded] = React.useState(false);

    useEffect(() => {
        Promise.all([
            Translator.init()
        ]).then(() => {
            setAppLoaded(true);
        })
    }, []);

    return !appLoaded ? null : (
        <TamaguiProvider config={TamaguiConfig} defaultTheme={colorScheme!}>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <Stack>
                    <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                </Stack>
            </ThemeProvider>
        </TamaguiProvider>
    )
}
