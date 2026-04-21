import { Pressable, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LeagueItem = ({ league }) => {
  const { navigate } = useNavigation();

  const onItemPress = () => {
    navigate("League");
  };

  return (
    <Pressable onPress={onItemPress} style={styles.container}>
      <View style={styles.rightBar} />
      <View style={styles.content}>
        <View style={styles.informations}>
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
          >
            <Ionicons name="trash" size={20} color={GlobalStyles.colors.red} />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default LeagueItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.border,
    borderRadius: 14,
    overflow: "hidden",
  },
  rightBar: {
    width: 6,
    height: "100%",
    backgroundColor: GlobalStyles.colors.primary,
  },
  content: {
    flex: 1,
    flexDirection: "row-reverse",
    gap: 30,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  informations: {
    flex: 1,
  },
  title: {
    flex: 1,
    fontFamily: "samim",
    fontSize: 22,
    textAlign: "right",
    color: GlobalStyles.colors.textPrimary,
  },
  detailsRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 3,
    marginTop: 6,
  },
  detailItem: {
    flexDirection: "row",
    gap: 2,
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
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 12,
  },
});
