import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

const UserProfile = () => {
  return (
    <ScrollView className="flex-1 bg-gray-100 p-5">
      <View className="items-center mt-16">
        <Image
          className="w-36 h-36 rounded-full border-4 border-white shadow-md"
          source={{
            uri: "https://t3.ftcdn.net/jpg/07/24/59/76/360_F_724597608_pmo5BsVumFcFyHJKlASG2Y2KpkkfiYUU.jpg",
          }}
        />
        <Text className="text-3xl font-bold mt-4">Your profile</Text>
        <Text className="text-gray-500 text-lg mt-1">รายละเอียดเกี่ยวกับคุณ</Text>

        <View className="w-full bg-white p-5 mt-6 rounded-2xl shadow">
          <Text className="text-xl font-semibold mb-3">ข้อมูลส่วนตัว</Text>
          <View className="py-2">
            <Text className="text-gray-600">Name</Text>
            <Text className="font-medium">สหรัฐ</Text>
          </View>
          <View className="py-2">
            <Text className="text-gray-600">Lastname</Text>
            <Text className="font-medium">หมีแรต</Text>
          </View>
          <View className="py-2">
            <Text className="text-gray-600">Email</Text>
            <Text className="font-medium">bassaharat123za@gmail.com</Text>
          </View>
          <View className="py-2">
            <Text className="text-gray-600">Address</Text>
            <Text className="font-medium">
              31/1 ม.14 ต.เขาขลุง อ.บ้านโป่ง จ.ราชบุรี 70110
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserProfile;
