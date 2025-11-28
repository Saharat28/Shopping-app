import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { items } from "../data/items";

const MainPage = ({ navigation }: any) => {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="px-6 py-4">
        <Text className="text-4xl font-bold text-blue-900 mb-2">MY SHOP</Text>
        <Text className="text-2xl text-blue-500 mb-6">
          สินค้าร้านเรา
        </Text>
        <View className="border mb-5 border-b-gray-300"></View>
        <Text className="text-2xl font-bold mb-2 text-blue-500">สินค้าทั้งหมด {items.length} รายการ</Text>
        {items.map((p) => (
          <TouchableOpacity
            key={p.id}
            onPress={() => navigation.navigate("Detail", { product: p })}
          >
            <View className="mb-6">
              <View className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  source={{ uri: p.image }}
                  style={{ width: '100%', height: 200 }}
                  resizeMode="cover"
                />
                <View className="p-4">
                  <Text className="text-xl font-semibold text-gray-800 mb-2">{p.name}</Text>
                  <Text className="text-sm text-gray-600">{p.description}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default MainPage;
