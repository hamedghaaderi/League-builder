import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Whatsapp = () => {
  return (
    <View style={styles.logo}>
      <Ionicons name="logo-whatsapp" size={28} color="#ffffffff" />
    </View>
  );
};

export default Whatsapp;

const styles = StyleSheet.create({
  logo: {
    borderRadius: 3,
    padding: 4,
    backgroundColor: "#25D366",
  },
});
