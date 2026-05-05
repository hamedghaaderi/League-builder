import { FlatList, View, StyleSheet } from "react-native";
import LeagueItem from "./league-item";
import GlobalStyles from "../../constants/colors";
import EmptyLeague from "./empty-league";

const PendingLeagues = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={["", "", "", "", "", "", "", "", "", "", ""]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        ListHeaderComponent={<View style={styles.listHeader} />}
        ListFooterComponent={<View style={styles.listFooter} />}
        renderItem={({ item }) => {
          return <LeagueItem league={item} />;
        }}
        keyExtractor={(item, index) => index}
      />
      {/* <EmptyLeague /> */}
    </View>
  );
};

export default PendingLeagues;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background,
    paddingHorizontal: 20,
  },
  content: {
    gap: 15,
  },
  listHeader: {
    height: 65,
    width: "100%",
    backgroundColor: GlobalStyles.colors.background,
  },
  listFooter: {
    height: 70,
    width: "100%",
    backgroundColor: GlobalStyles.colors.background,
  },
});
