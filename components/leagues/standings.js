import { StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../constants/colors";

const Standings = () => {
  return (
    <View style={styles.container}>
      <Text>Standings</Text>
    </View>
  );
};

export default Standings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background,
    padding: 20,
  },
});
