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
});

export default SignUp;
