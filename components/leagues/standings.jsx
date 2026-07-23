import { FlatList, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../constants/colors";
import StandingItem from "./standing-item";

const Standings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.detailsRow}>
          <Text style={styles.detail}>Pts</Text>
          <Text style={styles.detail}>GD</Text>
          <Text style={styles.detail}>L</Text>
          <Text style={styles.detail}>D</Text>
          <Text style={styles.detail}>W</Text>
          <Text style={styles.detail}>Pl</Text>
        </View>
        <View>
          <Text style={styles.team}>تیم</Text>
        </View>
      </View>
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
          return <StandingItem team={item} />;
        }}
      />
      <View style={styles.headerAndFooter} />
    </View>
  );
};

export default Standings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    padding: 10,
    borderRadius: 14,
    borderWidth: 0.75,
    marginBottom: 4,
    borderColor: GlobalStyles.colors.accentAlt,
    backgroundColor: GlobalStyles.colors.border,
  },
  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "50%",
  },
  detail: {
    fontFamily: "samim",
    textAlign: "center",
    width: "15%",
    fontSize: 12,
    color: GlobalStyles.colors.textPrimary,
  },
  team: {
    fontFamily: "samim",
    marginRight: 4,
    fontSize: 12,
    color: GlobalStyles.colors.textPrimary,
  },
  content: {
    gap: 4,
    paddingBottom: 15,
  },
});
