import AsyncStorage from "@react-native-async-storage/async-storage";

// At first I planned to implement the secure code thingy but eh~
export default class CodeManager {
    static codeStorageKey = "userCode";
    private static code = "";

    static init = async () => {
        CodeManager.code = await AsyncStorage.getItem(CodeManager.codeStorageKey) || ""
    }

    static hasCode = () => {
        return CodeManager.code !== ""
    }

    static checkCode = (toCheck: string) => {
        return toCheck === CodeManager.code;
    }

    static setCode = (code: string) => {
        CodeManager.code = ""
        AsyncStorage.setItem(CodeManager.codeStorageKey, code)
    }
}
