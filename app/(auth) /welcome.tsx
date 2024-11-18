import React, { useRef, useState } from "react";
import { Text, TouchableOpacity, View, Image, SafeAreaView } from "react-native";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { onboarding } from "@/constants";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      {/* Skip Button */}
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth) /sign-up");
        }}
        style={{
          width: "100%",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          padding: 20,
        }}
      >
        <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>
          Skip
        </Text>
      </TouchableOpacity>

      {/* Swiper Component */}
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View
            style={{
              width: 32,
              height: 4,
              marginHorizontal: 4,
              backgroundColor: "#E2E8F0",
              borderRadius: 4,
            }}
          />
        }
        activeDot={
          <View
            style={{
              width: 32,
              height: 4,
              marginHorizontal: 4,
              backgroundColor: "#0286FF",
              borderRadius: 4,
            }}
          />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View
            key={item.id}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
            }}
          >
            <Image
              source={item.image}
              style={{ width: "100%", height: 300 }}
              resizeMode="contain"
            />
            <Text style={{ marginTop: 20, fontSize: 18, fontWeight: "bold" }}>
              {item.title}
            </Text>
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
};

export default Onboarding;
