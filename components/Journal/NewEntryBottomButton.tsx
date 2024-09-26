import {TouchableOpacity, Image, ImageProps} from "react-native";
import React from "react";

interface Props {
    onPress: () => void
    image: ImageProps
}

export default function (props: Props) {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                padding: 20,
                height: "100%"
            }}>
            <Image style={{
                height: 30,
                width: 30,
                resizeMode: "contain"
            }} source={props.image}/>

        </TouchableOpacity>
    )
}
