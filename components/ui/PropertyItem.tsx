import { Link } from 'expo-router';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import tw from 'twrnc';

interface PropertyItemProps {
  item: {
    id: number | string;
    title: string;
    price: number;
    images: string[];
    location: {
      address: string;
      city: string;
      state: string;
    };
  };
}

export const PropertyItem: React.FC<{ item: PropertyItemProps['item'] }> = ({ item }) => {
  return (
    <Link href={`/property/${item.id}`} asChild>
      <Pressable style={tw`mb-4 border border-gray-200 rounded overflow-hidden bg-white shadow`}>
        <Image
          source={{ uri: item.images[0] }}
          style={tw`h-48 w-full`}
          resizeMode="cover"
        />
        <View style={tw`p-2`}>
          <Text style={tw`text-lg font-bold`}>{item.title}</Text>
          <Text style={tw`text-blue-600 font-semibold`}>${item.price}</Text>
          <Text style={tw`text-gray-700`}>
            {item.location.address}, {item.location.city}, {item.location.state}
          </Text>
        </View>
      </Pressable>
    </Link>
  );
};
