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

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSignInPress = async () => {
    // Placeholder for sign-up logic
    Alert.alert("Sign Up", "Account created successfully!");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={images.signUpCar} style={styles.headerImage} />
        <Text style={styles.headerText}>Welcome</Text>
      </View>
      <View style={styles.form}>
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

      <CustomButton
        title="Sign In"
        onPress={onSignInPress}
        style={styles.button}
      />
      <OAuth style={styles.oauthButtons} />
      
      {/* Centered "Already have an account?" Link */}
      <View style={styles.centeredLinkContainer}>
        <Link href="/sign-up" style={styles.link}>
          <Text style={styles.linkText}>
            Don't have an account?{" "}
            <Text style={styles.linkHighlight}>Sign Up</Text>
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
    paddingTop: 20,
  },
  header: {
    width: "100%",
    height: 250,
    position: "relative",
  },
  headerImage: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerText: {
    position: "absolute",
    bottom: 20,
    left: 20,
    fontSize: 24,
    fontWeight: "600",
    color: "#000000",
  },
  form: {
    padding: 20,
  },
  button: {
    width: "100%",
    marginTop: 20,
  },
  oauthContainer: {
    alignItems: "center",
    marginVertical: 20,
    width: "100%",
    paddingHorizontal: 20,
  },
  oauthText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#6c757d",
    textAlign: "center",
  },
  oauthButtons: {
    width: "100%", // Ensure OAuth buttons match other buttons' width
    marginTop: 20,
  },
  link: {
    marginTop: 20,
    alignItems: "center",
  },
  linkText: {
    fontSize: 16,
    color: "#000",
  },
  linkHighlight: {
    color: "#007AFF",
  },
  centeredLinkContainer: {
    flex: 1,
    justifyContent: "center", // Vertically center the link
    alignItems: "center", // Horizontally center the link
    marginBottom: 20, // Add space below the link
  },
});

export default SignIn;
