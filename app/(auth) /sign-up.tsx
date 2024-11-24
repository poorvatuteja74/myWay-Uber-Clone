import { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  View,
  StyleSheet,
} from "react-native";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = async () => {
    // Placeholder for sign-up logic
    Alert.alert("Sign Up", "Account created successfully!");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={images.signUpCar} style={styles.headerImage} />
        <Text style={styles.headerText}>Create Your Account</Text>
      </View>
      <View style={styles.form}>
        <InputField
          label="Name"
          placeholder="Enter name"
          icon={icons.person}
          value={form.name}
          onChangeText={(value) => setForm({ ...form, name: value })}
        />
        <InputField
          label="Email"
          placeholder="Enter email"
          icon={icons.email}
          textContentType="emailAddress"
          value={form.email}
          onChangeText={(value) => setForm({ ...form, email: value })}
        />
        <InputField
          label="Password"
          placeholder="Enter password"
          icon={icons.lock}
          secureTextEntry
          textContentType="password"
          value={form.password}
          onChangeText={(value) => setForm({ ...form, password: value })}
        />
      </View>

      <View style={styles.centered}>
        <CustomButton
          title="Sign Up"
          onPress={onSignUpPress}
          style={styles.button}
        />
        <OAuth />
        <Link href="/sign-in" style={styles.link}>
          <Text style={styles.linkText}>
            Already have an account?{" "}
            <Text style={styles.linkHighlight}>Log In</Text>
          </Text>
        </Link>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    width: "100%",
    height: 250,
    position: "relative",
  },
  headerImage: {
    width: "100%",
    height: "100%",
  },
  headerText: {
    position: "absolute",
    bottom: 20,
    left: 20,
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
  },
  form: {
    padding: 20,
  },
  centered: {
    alignItems: "center",
    marginTop: 16,
  },
  button: {
    width: "90%", // Adjust button width to fit screen
    marginTop: 16,
  },
  link: {
    marginTop: 20,
  },
  linkText: {
    fontSize: 16,
    color: "#000",
  },
  linkHighlight: {
    color: "#007AFF",
  },
});

export default SignUp;
