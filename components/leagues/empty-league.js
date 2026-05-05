import { Image, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const EmptyLeague = ({ complete = false }) => {
  return (
    <View style={styles.emptyContainer}>
      <Image
        source={require("../../assets/images/empty-league.png")}
        style={styles.emptyImage}
        resizeMode="contain"
      />
      <Text style={styles.emptyText}>
        لیگ {complete ? "تمام شده ای" : "در حال انجامی"} وجود ندارد.
      </Text>
      <Text style={styles.emptySubtitle}>
        با زدن روی دکمه{" "}
        <View style={styles.emptyButton}>
          <Ionicons name="add" size={10} color={GlobalStyles.colors.accent} />
        </View>
        ، یک لیگ جدید بساز.
      </Text>
    </View>
  );
};

export default EmptyLeague;

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyImage: {
    height: 140,
  },
  emptyText: {
    fontFamily: "samim",
    fontSize: 20,
    textAlign: "center",
    color: GlobalStyles.colors.textPrimary,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontFamily: "samim",
    fontSize: 14,
    textAlign: "center",
    color: GlobalStyles.colors.textPrimary,
  },
  emptyButton: {
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GlobalStyles.colors.primary,
    borderRadius: "100%",
  },
});
