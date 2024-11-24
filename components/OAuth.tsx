import { Alert, Image, Text, View, StyleSheet } from "react-native";
import CustomButton from "@/components/CustomButton";
import { icons } from "@/constants";

const OAuth = () => {
  const handleGoogleSignIn = async () => {
    // Placeholder for the OAuth flow
    // You can replace this logic with actual OAuth logic
    Alert.alert("Success", "Logged in successfully!");
  };

  return (
    <View style={styles.container}>
      {/* Divider with "Or" text */}
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.line} />
      </View>

      {/* Google Sign-In Button */}
      <CustomButton
        title="Log In with Google"
        style={styles.googleButton}
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            style={styles.googleIcon}
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc", // Light gray line color
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "#333", // Adjust the color of the "Or" text
  },
  googleButton: {
    marginTop: 10,
    width: "80%", // Ensure the button spans most of the width
    shadowOpacity: 0, // No shadow to keep it clean
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 10, // Space between icon and text
  },
});

export default OAuth;
