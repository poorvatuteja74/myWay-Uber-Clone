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
import { Link, router } from "expo-router";
import OAuth from "@/components/OAuth";
import { useSignUp } from "@clerk/clerk-expo";
import { ReactNativeModal } from "react-native-modal";

const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [verification, setVerification] = useState({
    state: "default", // Initial state
    error: "",
    code: "",
  });

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setVerification({
        ...verification,
        state: "pending", // Set state to pending
      });
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
      Alert.alert("Error", "An error occurred while signing up.");
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      });

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        setVerification({ ...verification, state: "success" }); // Set state to success
      } else {
        setVerification({
          ...verification,
          error: "Verification failed",
          state: "failed",
        });
      }
    } catch (err) {
      setVerification({
        ...verification,
        error: err.errors?.[0]?.longMessage || "An error occurred",
        state: "failed",
      });
    }
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

      <CustomButton
        title="Sign Up"
        onPress={onSignUpPress}
        style={styles.button}
      />
      <OAuth style={styles.oauthButtons} />

      <View style={styles.centeredLinkContainer}>
        <Link href="/sign-in" style={styles.link}>
          <Text style={styles.linkText}>
            Already have an account?{" "}
            <Text style={styles.linkHighlight}>Log In</Text>
          </Text>
        </Link>
      </View>

      {/* Modal for Pending */}
      <ReactNativeModal isVisible={verification.state === "pending"}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Verification</Text>
          <Text style={styles.modalMessage}>
            We've sent a verification code to {form.email}
          </Text>
          <InputField
            label="Verification Code"
            icon={icons.lock}
            placeholder="Enter the code"
            value={verification.code}
            keyboardType="numeric"
            onChangeText={(code) =>
              setVerification({ ...verification, code })
            }
          />
          {verification.error && (
            <Text style={styles.modalError}>{verification.error}</Text>
          )}
          <CustomButton title="Verify Email" onPress={onPressVerify} />
        </View>
      </ReactNativeModal>

      {/* Modal for Success */}
      <ReactNativeModal isVisible={verification.state === "success"}>
        <View style={styles.modalContainer}>
          <Image source={images.check} style={styles.modalImage} />
          <Text style={styles.modalTitle}>Verified</Text>
          <Text style={styles.modalMessage}>
            You have successfully verified your account.
          </Text>
          <CustomButton
            title="Browse Home"
            onPress={() => router.replace("/(root)/(tabs)/home")}
            style={styles.modalButton}
          />
        </View>
      </ReactNativeModal>
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
  oauthButtons: {
    width: "100%",
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
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  modalImage: {
    width: 110,
    height: 110,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    textAlign: "center",
    color: "gray",
    marginBottom: 20,
  },
  modalButton: {
    marginTop: 15,
    width: "80%",
  },
  modalError: {
    color: "red",
    fontSize: 14,
    marginTop: 10,
  },
});

export default SignUp;
