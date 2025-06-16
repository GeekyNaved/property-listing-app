// import { useBookingStore } from "@/store/bookingStore";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { useLocalSearchParams, useRouter } from "expo-router";
// import { ScrollView, Text, TouchableOpacity, View } from "react-native";
// import { WebView } from "react-native-webview";
// import tw from "twrnc";

// const fetchProperty = async (id: string) => {
//   const res = await axios.get(`http://192.168.29.101:3000/properties/${id}`);
//   return res.data;
// };

// export default function PropertyDetail() {
//   const { id } = useLocalSearchParams<{ id: string }>();
//   const { data, isLoading } = useQuery({
//     queryKey: ["property", id],
//     queryFn: () => fetchProperty(id!),
//   });
//   const addBooking = useBookingStore((s) => s.addBooking);
//   const router = useRouter();
//   if (isLoading) return <Text style={tw`text-center mt-10`}>Loading...</Text>;

//   // google map
//   const iframeHTML = `
//     <html>
//       <body style="margin:0;padding:0;">
//         <iframe 
//           src="https://www.google.com/maps?q=${data.location.coordinates.latitude},${data.location.coordinates.longitude}&z=20&output=embed"
//           width="100%" 
//           height="100%" 
//           frameborder="0" 
//           style="border:0;" 
//           allowfullscreen
//         ></iframe>
//       </body>
//     </html>
//   `;

//   const handleBooking = () => {
//     addBooking({ id: data.id, title: data.title, price: data.price });
//     router.replace("/(tabs)/bookings");
//   };
//   return (
//     <ScrollView style={tw`p-4`}>
//       <View style={tw`h-64 w-full rounded mb-4 overflow-hidden`}>
//         <WebView
//           originWhitelist={["*"]}
//           source={{ html: iframeHTML }}
//           style={tw`h-64 w-full`}
//         />
//       </View>
//       <Text style={tw`text-xl font-bold mb-1`}>{data.title}</Text>
//       <Text style={tw`text-blue-600 font-semibold mb-2`}>${data.price}</Text>
//       <Text style={tw`text-gray-700 mb-2`}>
//         {data.location.address}, {data.location.city}, {data.location.state}
//       </Text>
//       <Text style={tw`text-lg font-bold mb-2`}>Features:</Text>
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         style={tw`mb-4`}
//       >
//         {data.features.map((f: string, idx: number) => (
//           <Text
//             key={idx}
//             style={tw`bg-blue-100 text-blue-800 px-3 py-1 rounded-full mr-2 mb-2 text-sm font-medium`}
//           >
//             {f}
//           </Text>
//         ))}
//       </ScrollView>
//       <TouchableOpacity
//         style={tw`bg-blue-500 p-3 rounded mt-4`}
//         onPress={handleBooking}
//       >
//         <Text style={tw`text-white text-center font-bold`}>Book Property</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// }

import { useBookingStore } from "@/store/bookingStore";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { WebView } from "react-native-webview";
import tw from "twrnc";

const fetchProperty = async (id: string) => {
  const res = await axios.get(`http://192.168.29.101:3000/properties/${id}`);
  return res.data;
};

export default function PropertyDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isLoading } = useQuery({
    queryKey: ["property", id],
    queryFn: () => fetchProperty(id!),
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
        <TouchableOpacity
          style={tw`bg-blue-500 p-3 rounded`}
          onPress={handleBooking}
        >
          <Text style={tw`text-white text-center font-bold`}>Book Property</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
