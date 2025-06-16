import { Image, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

export default function Profile() {
  return (
    <View style={tw`flex-1 bg-white p-6`}>
      {/* User Avatar */}
      <View style={tw`items-center mt-8 mb-4`}>
        <Image
          source={{
            uri: 'https://i.pravatar.cc/150?img=12', // Replace with user avatar if you have
          }}
          style={tw`w-24 h-24 rounded-full`}
        />
        <Text style={tw`text-xl font-bold mt-2`}>John Doe</Text>
        <Text style={tw`text-gray-500`}>johndoe@example.com</Text>
      </View>

      {/* Profile Actions */}
      <View style={tw`mt-8`}>
        <TouchableOpacity style={tw`bg-blue-500 p-3 rounded mb-3`}>
          <Text style={tw`text-white text-center font-semibold`}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`bg-red-500 p-3 rounded`}>
          <Text style={tw`text-white text-center font-semibold`}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
