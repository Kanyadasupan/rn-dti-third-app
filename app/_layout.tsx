import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#f59eeaff" },
        headerTitleStyle: { color: "white" },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "หน้าหลัก",
        }}
      />
      <Stack.Screen
        name="signin"
        options={{
          title: "เข้าสู่ระบบ",
          headerBackButtonDisplayMode: "minimal",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          title: "สมัครสมาชิก",
          headerBackButtonDisplayMode: "minimal",
          headerShown: true,
        }}
      />
    </Stack>
  );
}
