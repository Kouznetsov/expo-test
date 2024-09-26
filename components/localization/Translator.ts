import fr from "./translations/fr.json"
import en from "./translations/en.json"
import es from "./translations/es.json"
import AsyncStorage from "@react-native-async-storage/async-storage";
import {NativeModules, Platform} from "react-native";
import AppStrings from "@/components/localization/AppStrings";
import {I18n} from "i18n-js";
import {getLocales} from "expo-localization";


const i18n = new I18n({
    fr: fr,
    en: en,
    es: es,
});

export default class Translator {
    private static storageKey = "currentLanguage"

    static init = async () => {
        let locales = getLocales();
        const currentLanguage =
            await AsyncStorage.getItem(Translator.storageKey) || locales[0].languageCode;

        i18n.enableFallback = true;
        console.log(currentLanguage)
    }

    static availableLocales = () => {
        return ["fr", "en", "es"]
    }

    static switchLanguage = async (language: string) => {
        await AsyncStorage.setItem(Translator.storageKey, language);
        i18n.locale = language
    }
}

const translate = (str: AppStrings) => {
    return i18n.translate(str);
}

export {
    translate
}
