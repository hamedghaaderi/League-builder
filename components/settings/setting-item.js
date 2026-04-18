import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GlobalStyles from "../../constants/colors";

const SettingItem = ({ children, icon }) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="arrow-back"
        size={18}
        color={GlobalStyles.colors.secondary}
      />
      <View style={styles.content}>
        <Text style={styles.text}>{children}</Text>
        <Ionicons name={icon} size={18} color={GlobalStyles.colors.accentAlt} />
      </View>
    </View>
  );
};

export default SettingItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: GlobalStyles.colors.border,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 15,
  },
  text: {
    fontFamily: "samim",
    fontSize: 17,
    color: GlobalStyles.colors.textPrimary,
  },
});
