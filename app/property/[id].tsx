import { BaseButton } from "@/components/ui/BaseButton";
import { useBookingStore } from "@/store/bookingStore";
import { getPropertyByID } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import tw from "twrnc";

export default function PropertyDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isLoading } = useQuery({
    queryKey: ["property", id],
    queryFn: () => getPropertyByID(id!),
  });
  const addBooking = useBookingStore((s) => s.addBooking);
  const router = useRouter();

  if (isLoading) return <Text style={tw`text-center mt-10`}>Loading...</Text>;

  const iframeHTML = `
    <html>
      <body style="margin:0;padding:0;">
        <iframe 
          src="https://www.google.com/maps?q=${data.location.coordinates.latitude},${data.location.coordinates.longitude}&z=20&output=embed"
          width="100%" 
          height="100%" 
          frameborder="0" 
          style="border:0;" 
          allowfullscreen
        ></iframe>
      </body>
    </html>
  `;

  const handleBooking = () => {
    addBooking({ id: data.id, title: data.title, price: data.price });
    router.replace("/(tabs)/bookings");
  };

  return (
    <View style={tw`flex-1`}>
      <ScrollView style={tw`p-4 flex-1 mb-16`}>
        <View style={tw`h-64 w-full rounded mb-4 overflow-hidden`}>
          <WebView
            originWhitelist={["*"]}
            source={{ html: iframeHTML }}
            style={tw`h-64 w-full`}
          />
        </View>
        <Text style={tw`text-xl font-bold mb-1`}>{data.title}</Text>
        <Text style={tw`text-blue-600 font-semibold mb-2`}>${data.price}</Text>
        <Text style={tw`text-gray-700 mb-2`}>
          {data.location.address}, {data.location.city}, {data.location.state}
        </Text>
        <Text style={tw`text-lg font-bold mb-2`}>Features:</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={tw`mb-4`}
        >
          {data.features.map((f: string, idx: number) => (
            <Text
              key={idx}
              style={tw`bg-blue-100 text-blue-800 px-3 py-1 rounded-full mr-2 mb-2 text-sm font-medium`}
            >
              {f}
            </Text>
          ))}
        </ScrollView>
      </ScrollView>

      <View style={tw`absolute bottom-15 left-4 right-4`}>
        <BaseButton
          title="Book Property"
          onPress={handleBooking}
          color="blue"
        />
      </View>
    </View>
  );
}
