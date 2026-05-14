import { StyleSheet, Text, TextInput, View } from "react-native";
import GlobalStyles from "../../constants/colors";

const Input = ({
  label = "",
  placeholder,
  inputStyles = {},
  withoutLabel = false,
  value,
  onChange,
}) => {
  return (
    <View style={styles.fieldContainer}>
      {!withoutLabel && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, inputStyles]}
        onChangeText={onChange}
        value={value}
        autoCorrect={false}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  fieldContainer: {
    alignItems: "flex-end",
    flexDirection: "column",
    gap: 13,
    flex: 1,
  },
  label: {
    fontFamily: "samim",
    marginRight: 10,
    fontSize: 17,
    textAlign: "center",
    color: GlobalStyles.colors.textPrimary,
  },
  input: {
    width: "100%",
    height: 45,
    fontFamily: "samim",
    fontSize: 15,
    direction: "rtl",
    textAlign: "right",
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: GlobalStyles.colors.primary,
    backgroundColor: GlobalStyles.colors.border,
  },
});
