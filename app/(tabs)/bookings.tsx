// // /app/(tabs)/bookings.tsx
// import { useBookingStore } from '@/store/bookingStore';
// import { ScrollView, Text, View } from 'react-native';
// import tw from 'twrnc';

// export default function Bookings() {
//   const bookings = useBookingStore((s) => s.bookings);

//   if (bookings.length === 0) {
//     return (
//       <View style={tw`flex-1 justify-center items-center p-4`}>
//         <Text style={tw`text-gray-500 text-lg`}>No bookings yet.</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={tw`p-4 mt-10`}>
//       {bookings.map((b) => (
//         <View
//           key={b.id}
//           style={tw`bg-white rounded-xl shadow-md p-4 mb-4 border border-gray-200`}
//         >
//           <Text style={tw`text-xl font-bold text-blue-700 mb-1`}>
//             {b.title}
//           </Text>
//           <Text style={tw`text-gray-600 mb-2`}>${b.price}</Text>
//           <View style={tw`flex-row justify-between`}>
//             <Text style={tw`text-xs text-gray-400`}>Booking ID: {b.id}</Text>
//             <Text style={tw`text-xs text-green-500 font-semibold`}>Confirmed</Text>
//           </View>
//         </View>
//       ))}
//     </ScrollView>
//   );
// }


import { useBookingStore } from '@/store/bookingStore';
import { ScrollView, Text, View } from 'react-native';
import tw from 'twrnc';

export default function Bookings() {
  const bookings = useBookingStore((s) => s.bookings);

  if (bookings.length === 0) {
    return (
      <View style={tw`flex-1 justify-center items-center p-4`}>
        <Text style={tw`text-gray-500 text-lg`}>No bookings yet.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={tw`p-4 mt-10`}>
      {bookings.map((b) => (
        <View
          key={b.id}
          style={tw`bg-white rounded-xl shadow-md p-4 mb-4 border border-gray-200`}
        >
          <Text style={tw`text-xl font-bold text-blue-700 mb-1`}>{b.title}</Text>
          <Text style={tw`text-gray-600 mb-2`}>${b.price}</Text>
          <View style={tw`flex-row justify-between items-center`}>
            <Text style={tw`text-xs text-gray-400`}>Booking ID: {b.id}</Text>
            <Text style={tw`text-xs text-green-500 font-semibold`}>Confirmed</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
