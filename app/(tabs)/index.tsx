import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'expo-router';
import { useState } from 'react';
import { FlatList, Image, Pressable, Text, TextInput, View } from 'react-native';
import tw from 'twrnc';

const fetchProperties = async () => {
  const res = await axios.get('http://192.168.29.101:3000/properties');
  return res.data;
};

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['properties'],
    queryFn: fetchProperties,
  });
  const [search, setSearch] = useState('');

  if (isLoading) return <Text style={tw`text-center mt-10`}>Loading...</Text>;

  const filtered = data.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={tw`p-4 mt-10`}>
      <TextInput
        style={tw`border border-gray-300 p-2 mb-4 rounded`}
        placeholder="Search"
        value={search}
        onChangeText={setSearch}
      />

      {filtered.length === 0 ? (
        <Text style={tw`text-center text-gray-500`}>No results found</Text>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
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
          )}
        />
      )}
    </View>
  );
}