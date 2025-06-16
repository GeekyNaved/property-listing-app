import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';
import tw from 'twrnc';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={tw`flex-1 items-center justify-center p-5`}>
        <Text style={tw`text-xl font-bold`}>This screen does not exist.</Text>
        <Link href="/" style={tw`mt-4 py-4`}>
          <Text style={tw`text-blue-500 underline`}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
