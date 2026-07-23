import { FlatList, StyleSheet, View } from "react-native";
import GlobalStyles from "../../constants/colors";
import Game from "./game";

const Fixtures = ({ fixed = false }) => {
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
          return <Game game={item} editable={fixed ? false : true} />;
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
    paddingHorizontal: 20,
  },
  content: {
    paddingVertical: 15,
    gap: 15,
  },
});
