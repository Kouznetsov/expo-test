import {Button} from "react-native";
import {translate} from "@/components/localization/Translator";
import React from "react";

interface Props {
    disabled: boolean
    onPress: () => void
}

export default function (props: Props) {
    return (<Button  title={translate("publish")} {...props} />)
}
