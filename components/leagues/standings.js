import { FlatList, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../constants/colors";
import StandingItem from "./standing-item";

const Standings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.standings}>
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
          stickyHeaderIndices={[0]}
          ListHeaderComponent={() => (
            <View style={styles.header}>
              <View style={styles.detailsRow}>
                <Text style={styles.detail}>امتیاز</Text>
                <Text style={styles.detail}>تفاضل</Text>
                <Text style={styles.detail}>باخت</Text>
                <Text style={styles.detail}>مساوی</Text>
                <Text style={styles.detail}>برد</Text>
                <Text style={styles.detail}>بازی</Text>
              </View>
              <View>
                <Text style={styles.team}>تیم</Text>
              </View>
            </View>
          )}
          renderItem={({ item }) => {
            return <StandingItem team={item} />;
          }}
        />
      </View>
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
  standings: {
    borderRadius: 14,
    overflow: "hidden",
    padding: 10,
    backgroundColor: GlobalStyles.colors.border,
  },
  content: {
    gap: 13,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: GlobalStyles.colors.accentAlt,
    backgroundColor: GlobalStyles.colors.border,
  },
  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
  },
  detail: {
    fontFamily: "samim",
    textAlign: "center",
    width: "15%",
    fontSize: 11,
    color: GlobalStyles.colors.textPrimary,
  },
  team: {
    fontFamily: "samim",
    marginRight: 4,
    fontSize: 11,
    color: GlobalStyles.colors.textPrimary,
  },
});
