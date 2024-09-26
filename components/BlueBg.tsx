import {LinearGradient} from "tamagui/linear-gradient";
import AppColors from "@/components/AppColors";
import React from "react";

export default function () {
    return (
        <LinearGradient style={{
            width: "100%",
            height: "100%",
            position: "absolute",
        }} colors={AppColors.gradientBg} start={[.5, 0]} end={[.5, .5]}/>
    )
}
