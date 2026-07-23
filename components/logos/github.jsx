import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Github = () => {
  return (
    <View style={styles.logo}>
      <Ionicons name="logo-github" size={28} color="#ffffffff" />
    </View>
  );
};

export default Github;

const styles = StyleSheet.create({
  logo: {
    borderRadius: 3,
    padding: 4,
    backgroundColor: "#181717",
  },
});
