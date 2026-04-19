import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Instagram = () => {
  return (
    <LinearGradient
      colors={["#515BD4", "#8134AF", "#DD2A7B", "#F58529"]}
      style={styles.logo}
    >
      <Ionicons name="logo-instagram" size={30} color="#ffffffff" />
    </LinearGradient>
  );
};

export default Instagram;

const styles = StyleSheet.create({
  logo: { borderRadius: 3, padding: 3 },
});
