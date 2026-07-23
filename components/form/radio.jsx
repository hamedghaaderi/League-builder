import { Pressable, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../constants/colors";

const Radio = ({ label, options, value, onChange }) => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.radioWrapper}>
        {options.map((_option, _index) => (
          <View key={_index} style={styles.option}>
            <Pressable
              onPress={() => onChange(_option.value)}
              style={styles.radio}
            >
              {value === _option.value && <View style={styles.radioActive} />}
            </Pressable>
            <Text style={styles.radioText}>{_option.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Radio;

const styles = StyleSheet.create({
  fieldContainer: {
    alignItems: "flex-end",
    flexDirection: "column",
    gap: 13,
  },
  label: {
    fontFamily: "samim",
    marginRight: 10,
    fontSize: 17,
    textAlign: "center",
    color: GlobalStyles.colors.textPrimary,
  },
  radioWrapper: {
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: GlobalStyles.colors.border,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 15,
    gap: 9,
    width: "100%",
  },
  option: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 10,
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.textSecondary,
    justifyContent: "center",
    alignItems: "center",
  },
  radioActive: {
    width: 11,
    height: 11,
    borderRadius: 6,
    backgroundColor: GlobalStyles.colors.primary,
  },
  radioText: {
    fontFamily: "samim",
    fontSize: 15,
    color: GlobalStyles.colors.textSecondary,
  },
});
