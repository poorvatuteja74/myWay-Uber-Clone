import React, { useRef, useState } from "react";
import { Text, TouchableOpacity, View, Image, SafeAreaView } from "react-native";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length-1;

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
            <View className="flex flex-row items-center justify-center w-full mt-10">
              <Text className=" text-black text-3xl font-bold mx-10 text-center">{item.title}</Text>

            </View>
            <Text className="text-lg  font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
              {item.description}
            </Text>
          </View>

        ))}
      </Swiper>
      <CustomButton 
      title = {isLastSlide ? "Get Started" : "Next"} 
      onPress={() => 
        isLastSlide 
        ? router.replace('/(auth) /sign-up')
        : swiperRef.current ?.scrollBy(1)}
      className="w-11/12 mt-10" />
    </SafeAreaView>
  );
};

export default Onboarding;
