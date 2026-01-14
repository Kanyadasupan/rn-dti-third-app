import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from "react-native";
import React from "react";
import { Image } from "expo-image";
import { Link } from "expo-router";

export default function Signup() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/refer.png")}
          style={{ width: 60, height: 60, marginTop: 20 }}
        />
        <Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 5 }}>สมัครสมาชิก</Text>
        <TextInput style={[{ marginTop: 20 },styles.input]} placeholder="ชื่อ-นามสกุล"></TextInput>
        <TextInput style={styles.input} placeholder="อีเมล"></TextInput>
        <TextInput style={styles.input} placeholder="ชื่อผู้ใช้"></TextInput>
        <TextInput style={styles.input} placeholder="รหัสผ่าน"></TextInput>
        <View style={styles.bt2}>
          <Pressable style={[{ backgroundColor: "#ff0000ff" }, styles.button]}>
            <Text style={styles.txt}>ยกเลิก</Text>
          </Pressable>
          <Pressable style={[{ backgroundColor: "#f59eeaff" }, styles.button]}>
            <Text style={styles.txt}>ลงทะเบียน</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  input: {
    height: 50,
    width: 300,
    margin: 10,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#f59ee9ff",
    padding: 10,
  },
  button: {
    borderRadius: 15,
    marginTop: 20,
    width: 140,
    height: 50,
  },
  txt: {
    color: "white",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingTop: 12,
    fontSize: 16,
  },
  bt2: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
});
