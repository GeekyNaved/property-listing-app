import { PropertyItem } from "@/components/ui/PropertyItem";
import { getAllProperties } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import tw from "twrnc";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["properties"],
    queryFn: getAllProperties,
  });
  const [search, setSearch] = useState("");

  if (isLoading) return <Text style={tw`text-center mt-10`}>Loading...</Text>;

  const filtered = data?.filter((p: any) =>
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

      {filtered?.length === 0 ? (
        <Text style={tw`text-center text-gray-500`}>No results found</Text>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <PropertyItem item={item} />}
        />
      )}
    </View>
  );
}
