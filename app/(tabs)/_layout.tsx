import React from "react";
import {Tabs} from "expo-router";
import TabBar from "@/components/TabBar";
import {BottomTabBarProps} from "@react-navigation/bottom-tabs";

export default function TabLayout(props: BottomTabBarProps) {
    return (
        <Tabs screenOptions={{headerShown: false}}
              tabBar={props => <TabBar {...props} />}
              backBehavior={"history"}>
            <Tabs.Screen name="index" options={{
                title: "Home",
            }}/>
            <Tabs.Screen name="journal" options={{
                title: "Journal",
            }}/>
            <Tabs.Screen name="add" options={{
                title: "+",
            }}/>
            <Tabs.Screen name="blog"  options={{
                title: "Blog",
            }}/>
            <Tabs.Screen name="plus" options={{
                title: "Plus",
            }}/>
        </Tabs>
    );
}
