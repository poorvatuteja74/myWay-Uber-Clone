import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "@/types/type";

const styles = StyleSheet.create({
  button: {
    width: "80%",
    borderRadius: 50,
    padding: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return { backgroundColor: "#6b7280" }; // gray-500
    case "danger":
      return { backgroundColor: "#ef4444" }; // red-500
    case "success":
      return { backgroundColor: "#10b981" }; // green-500
    case "outline":
      return {
        backgroundColor: "transparent",
        borderColor: "#d1d5db", // neutral-300
        borderWidth: 0.5,
      };
    default:
      return { backgroundColor: "#0286FF" };
  }
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return { color: "black" };
    case "secondary":
      return { color: "#f3f4f6" }; // gray-100
    case "danger":
      return { color: "#fee2e2" }; // red-100
    case "success":
      return { color: "#d1fae5" }; // green-100
    default:
      return { color: "white" };
  }
};

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, getBgVariantStyle(bgVariant)]}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text style={[styles.text, getTextVariantStyle(textVariant)]}>
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;
