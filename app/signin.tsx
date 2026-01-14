import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { Image } from "expo-image";
import { Link } from "expo-router";

export default function Signin() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/refer.png")}
          style={{ width: 60, height: 60, marginTop: 20 }}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>เข้าสู่ระบบ</Text>
        <TextInput style={styles.input} placeholder="ชื่อผู้ใช้"></TextInput>
        <TextInput
          style={styles.input}
          placeholder="รหัสผ่าน"
          secureTextEntry={true}
        ></TextInput>
        <Pressable style={styles.button}>
          <Text style={styles.txt}>เข้าสู่ระบบ</Text>
        </Pressable>
        <Link href="/signup" style={{ marginTop: 10 }}>
          <Text>Do not have accout, Signup</Text>
        </Link>
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
    backgroundColor: "#f59eeaff",
    borderRadius: 15,
    marginTop: 20,
    width: 300,
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
});
