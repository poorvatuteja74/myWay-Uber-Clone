import {
    TextInput,
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
    StyleSheet,
  } from "react-native";
  
  import { InputFieldProps } from "@/types/type";
  
  const InputField = ({
    label,
    icon,
    secureTextEntry = false,
    labelStyle,
    containerStyle,
    inputStyle,
    iconStyle,
    placeholder,
    ...props
  }: InputFieldProps) => {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={[styles.inputContainer, containerStyle]}>
            {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
            <View style={styles.fieldWrapper}>
              {icon && (
                <Image source={icon} style={[styles.icon, iconStyle]} />
              )}
              <TextInput
                style={[styles.input, inputStyle]}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder} // Add the placeholder prop here
                placeholderTextColor="#A9A9A9" // Optional: Customize placeholder text color
                {...props}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  };
  
  const styles = StyleSheet.create({
    inputContainer: {
      marginVertical: 8,
      width: "100%",
    },
    label: {
      fontSize: 16,
      fontWeight: "600",
      marginBottom: 8,
    },
    fieldWrapper: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#F3F4F6",
      borderRadius: 25,
      borderWidth: 1,
      borderColor: "#F3F4F6",
      paddingHorizontal: 12,
    },
    icon: {
      width: 24,
      height: 24,
      marginRight: 8,
    },
    input: {
      flex: 1,
      fontSize: 15,
      fontWeight: "600",
      paddingVertical: 12,
      textAlign: "left",
    },
  });
  
  export default InputField;
  