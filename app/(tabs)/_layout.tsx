import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

const _Layout = () => {
  const TabIcon = ({ focused, title, icon }: any) => {
    if (focused) {
      return (
        <ImageBackground
          source={images.highlight}
          className="flex flex-row flex-1 w-full rounded-full min-w-[112px] min-h-16 mt-4 items-center justify-center overflow-hidden"
        >
          <Image source={icon} tintColor="#151312" className="size-5" />
          <Text className="text-secondary text-base font-semibold ml-2">
            {title}
          </Text>
        </ImageBackground>
      );
    }
    return (
      <View className="size-full mt-4 justify-center items-center rounded-full">
        <Image source={icon} tintColor="#a8b5db" className="size-5" />
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0d23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0f0d23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return <TabIcon title="Home" focused={focused} icon={icons.home} />;
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon title="Search" focused={focused} icon={icons.search} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon title="Saved" focused={focused} icon={icons.save} />
            );
          },
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon title="Profile" focused={focused} icon={icons.person} />
            );
          },
        }}
      />
    </Tabs>
  );
};

export default _Layout;

const styles = StyleSheet.create({});
