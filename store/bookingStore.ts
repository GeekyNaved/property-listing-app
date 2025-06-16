import { create } from "zustand";

interface Booking {
  id: string;
  title: string;
  price: number;
}

interface BookingState {
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
}

export const useBookingStore = create<BookingState>((set, get) => ({
  bookings: [],
  addBooking: (booking) => {
    const existing = get().bookings.find((b) => b.id === booking.id);
    if (!existing) {
      set((state) => ({
        bookings: [...state.bookings, booking],
      }));
    }
  },
}));
