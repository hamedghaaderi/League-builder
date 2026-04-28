import { FlatList, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../constants/colors";
import Game from "./game";

const Fixtures = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ]}
        keyExtractor={(item, index) => index}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Game game={item} />;
        }}
      />
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
  content: {
    gap: 15,
  },
});
