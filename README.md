# 📱 Property Listing App

---

## 🚀 About the App

This is a **React Native property listing app** built using **Expo + TypeScript**.

✅ Home screen with property list + search bar\
✅ Property detail screen with map + features\
✅ Bookings screen\
✅ Profile screen\
✅ Book property feature\
✅ Tab navigation

---

## 📡 Backend Setup (JSON Server)

1️⃣ Install JSON-server globally:

```bash
npm install -g json-server
```

2️⃣ Download and save `db.json`:\
👉 [https://pastebin.com/raw/Sa0LzR3T](https://pastebin.com/raw/Sa0LzR3T)

3️⃣ Start the server:

```bash
json-server --watch db.json --port 3000
```

---

## ⚙️ App Setup

1️⃣ Clone the repo:

```bash
git clone https://github.com/GeekyNaved/property-listing-app
cd property-listing-app
```

2️⃣ Install dependencies:

```bash
npm install
```

3️⃣ Start Expo:

```bash
npx expo start
```

4️⃣ Use your own IP by opening command promt and write ipconfig use ipv4 and go to utils/api.ts and change base url with your own IP

``` bash
ipconfig
```
5️⃣ Run on emulator / device via Expo Go app / dev tools.

⚠️ API URL should point to:

```bash
http://192.168.x.x:3000 (Real device)
http://10.0.2.2:3000 (Android emulator)
http://localhost:3000 (web)
```

---

## 📲 Build APK (Optional)

1️⃣ Run:

```bash
npx expo export --platform android
```

Or use EAS Build:

```bash
npx expo install expo-dev-client
npx eas build -p android
```

---

## 📹 Video Walkthrough

🎥 [Watch the video](https://www.loom.com/) *(Replace with your Loom link)*

