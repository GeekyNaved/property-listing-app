import { BaseButton } from "@/components/ui/BaseButton";
import { getProfile } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { Image, Text, View } from "react-native";
import tw from "twrnc";

export default function Profile() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  });

  if (isLoading) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <Text>Error loading profile</Text>
      </View>
    );
  }

  return (
    <View style={tw`flex-1 bg-white p-6`}>
      <View style={tw`items-center mt-8 mb-4`}>
        <Image
          source={{
            uri: data.avatar || "https://i.pravatar.cc/150?img=12",
          }}
          style={tw`w-24 h-24 rounded-full`}
        />
        <Text style={tw`text-xl font-bold mt-2`}>{data.name}</Text>
        <Text style={tw`text-gray-500`}>{data.email}</Text>
      </View>

      <View style={tw`mt-8`}>
        <BaseButton title="Edit Profile" color="blue" extraClasses="mb-3" />
        <BaseButton title="Logout" color="red" />
      </View>
    </View>
  );
}
