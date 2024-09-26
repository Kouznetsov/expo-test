import React from "react";
import {Tabs} from "expo-router";
import TabBar from "@/components/TabBar/TabBar";
import {BottomTabBarProps} from "@react-navigation/bottom-tabs";
import {translate} from "@/components/localization/Translator";

export default function TabLayout(props: BottomTabBarProps) {

    return (
        <Tabs screenOptions={{headerShown: false}}
              tabBar={props => <TabBar {...props} />}
              backBehavior={"history"}>
            <Tabs.Screen name="index" options={{
                title: translate("home")
            }}/>
            <Tabs.Screen name="journal" options={{
                title: translate("journal"),
            }}/>
            <Tabs.Screen name="add" options={{
                title: "+",
            }}/>
            <Tabs.Screen name="blog"  options={{
                title: translate("blog"),
            }}/>
            <Tabs.Screen name="plus" options={{
                title: translate("plus"),
            }}/>
        </Tabs>
    );
}
