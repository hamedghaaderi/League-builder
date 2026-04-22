import { StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../constants/colors";

const Fixtures = () => {
  return (
    <View style={styles.container}>
      <Text>Fixtures</Text>
    </View>
  );
};

export default Fixtures;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background,
    padding: 20,
  },
});
