import { StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../constants/colors";

const StandingItem = ({ team }) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsRow}>
        <Text style={styles.detail}>100</Text>
        <Text style={styles.detail}>+500</Text>
        <Text style={styles.detail}>100</Text>
        <Text style={styles.detail}>100</Text>
        <Text style={styles.detail}>100</Text>
        <Text style={styles.detail}>100</Text>
      </View>
      <View style={styles.teamRow}>
        <Text style={styles.team}>منچستر سیتی - حامد</Text>
        <Text style={styles.rank}>1</Text>
      </View>
    </View>
  );
};

export default StandingItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
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
    color: GlobalStyles.colors.textSecondary,
  },
  teamRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "35%",
    gap: 8,
  },
  team: {
    flex: 1,
    fontFamily: "samim",
    textAlign: "right",
    fontSize: 11,
    color: GlobalStyles.colors.textSecondary,
  },
  rank: {
    fontFamily: "samim",
    fontSize: 11,
    color: GlobalStyles.colors.accentAlt,
  },
});
