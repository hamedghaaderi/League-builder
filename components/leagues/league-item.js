import { Pressable, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const LeagueItem = ({ league }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && { transform: [{ scale: 0.98 }], opacity: 0.9 },
      ]}
    >
      <View style={styles.rightBar} />
      <View style={styles.content}>
        <Text style={styles.title}>لیگ اول</Text>
        <View style={styles.detailsRow}>
          <View style={styles.detailItem}>
            <Ionicons
              name="people"
              size={16}
              color={GlobalStyles.colors.accentAlt}
            />
            <Text style={styles.detailText}>4 تیم</Text>
          </View>
          <View style={styles.dot} />
          <View style={styles.detailItem}>
            <Ionicons
              name={true ? "repeat" : "arrow-forward"}
              size={16}
              color={GlobalStyles.colors.accentAlt}
            />
            <Text style={styles.detailText}>
              {true ? "رفت و برگشت" : "تک بازی"}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.actions}>
        <Pressable
          onPress={(e) => {
            e.stopPropagation();
          }}
          style={({ pressed }) => [
            styles.iconButton,
            pressed && { opacity: 0.5 },
          ]}
        >
          <Ionicons
            name="share-social"
            size={20}
            color={GlobalStyles.colors.secondary}
          />
        </Pressable>
        <Pressable
          onPress={(e) => {
            e.stopPropagation();
          }}
          style={({ pressed }) => [
            styles.iconButton,
            pressed && { opacity: 0.5 },
          ]}
        >
          <Ionicons
            name="trash"
            size={20}
            color={GlobalStyles.colors.red}
          />
        </Pressable>
      </View>
    </Pressable>
  );
};

export default LeagueItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.border,
    marginVertical: 10,
    borderRadius: 14,
    overflow: "hidden",
  },
  rightBar: {
    width: 5,
    height: "100%",
    backgroundColor: GlobalStyles.colors.primary,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  title: {
    fontFamily: "samim",
    fontSize: 22,
    color: GlobalStyles.colors.textPrimary,
  },
  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailText: {
    fontFamily: "samim",
    fontSize: 13,
    marginLeft: 4,
    color: GlobalStyles.colors.textSecondary,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 50,
    backgroundColor: GlobalStyles.colors.secondary,
    marginHorizontal: 10,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 12,
  },
  iconButton: {
    padding: 8,
    marginLeft: 6,
    borderRadius: 10,
    backgroundColor: GlobalStyles.colors.surfaceVariant,
  },
});
