import { FlatList, View, StyleSheet } from "react-native";
import CompleteLeagueItem from "./complete-league-item";
import GlobalStyles from "../../constants/colors";
import EmptyLeague from "./empty-league";

const completeLeagues = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={["", "", "", "", ""]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        renderItem={({ item }) => {
          return <CompleteLeagueItem league={item} />;
        }}
        keyExtractor={(item, index) => index}
      />
      {/* <EmptyLeague complete /> */}
    </View>
  );
};

export default completeLeagues;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background,
    paddingHorizontal: 20,
  },
  content: {
    gap: 15,
    paddingTop: 80,
    paddingBottom: 85,
  },
});
