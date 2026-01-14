import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.wth}>Welcome to Thailand</Text>
      <Text style={[{ fontSize: 20 }, styles.txtWel, styles.txtBold]}>
        Welcome to SAU
      </Text>
      <Text style={[{ fontSize: 10 }, styles.txtWel]}>Welcome to DTI</Text>
      <Link href="/signin" style={[{backgroundColor: "#f59ee97a", borderColor: "#f59ee9c0",paddingHorizontal: 60, paddingVertical: 20,}, styles.bts]}>เข้าสู่ระบบ</Link>
      <Link href="/signup" style={[{backgroundColor: "#aca2f695", borderColor: "#aca2f6ff",paddingHorizontal: 50, paddingVertical: 20,}, styles.bts]}>สมัครสมาชิก</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wth: { fontSize: 30, fontWeight: "bold", color: "#f59eeaff" },
  txtWel: { color: "#000ac3ff", textDecorationLine: "underline" },
  txtBold: { fontWeight: "bold" },
  bts:{ borderRadius: 40,borderWidth: 2, marginTop: 20, color: "white", fontWeight: "bold", fontSize: 16,}
});
