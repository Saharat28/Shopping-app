import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ProductDetail = ({route, navigation}: any) => {
  const { items } = route.params;
  
  return (
    <ScrollView className="flex-1 bg-gray-50 p-5">
      <View className="flex-1 justify-center items-center p-6  mb-6">
        <Image
          source={{ uri: items.image }}
          className="w-full h-80 rounded-xl"
          resizeMode="cover"
        />
        <Text className="text-4xl font-bold text-gray-800 mt-4">{items.name}</Text>
      </View>
      <View className="mb-6">
        <Text className="text-xl font-semibold text-gray-700">รายละเอียดสินค้า</Text>
        <Text className="text-sm text-gray-600 mt-2">{items.description || 'ไม่มีคำอธิบายเพิ่มเติม'}</Text>
    
      </View>
      <View className="mb-6">
        <Text className="text-2xl font-bold text-blue-500">฿{items.price}</Text>
      </View>
      <TouchableOpacity
        onPress={() => alert('หมดทุกอย่างจ้า')}
        className="bg-blue-500 p-4 rounded-lg"
      >
        
        <Text className="text-blue-500 text-center text-lg">กลับ</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default ProductDetail
