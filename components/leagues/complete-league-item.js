import { Pressable, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import DeleteModal from "../modals/delete-modal";

const CompleteLeagueItem = ({ league }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { navigate } = useNavigation();

  const onItemPress = () => {
    navigate("CompleteLeague");
  };

  return (
    <>
      <Pressable
        onPress={onItemPress}
        style={({ pressed }) => [
          styles.container,
          pressed && styles.containerPressed,
        ]}
      >
        <View style={styles.rightBar} />
        <View style={styles.content}>
          <View style={styles.informations}>
            <Text style={styles.title}>لیگ اول</Text>
            <View style={styles.winnerItem}>
              <View style={styles.trophyCircle}>
                <Ionicons
                  name="ribbon"
                  size={13}
                  color={GlobalStyles.colors.winnerIcon}
                />
              </View>
              <Text style={styles.winnerText}>منچسترسیتی - حامد</Text>
            </View>
          </View>
          <Pressable
            onPress={(e) => {
              e.stopPropagation();
              setShowDeleteModal(true);
            }}
            hitSlop={8}
          >
            {({ pressed }) => (
              <Ionicons
                name="trash"
                size={22}
                color={
                  pressed
                    ? GlobalStyles.colors.redPressed
                    : GlobalStyles.colors.red
                }
              />
            )}
          </Pressable>
        </View>
      </Pressable>
      {showDeleteModal && (
        <DeleteModal
          visibility={showDeleteModal}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}
    </>
  );
};

export default CompleteLeagueItem;

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
  winnerItem: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    marginTop: 6,
    gap: 6,
  },
  winnerText: {
    fontFamily: "samim",
    fontSize: 13,
    marginLeft: 4,
    color: GlobalStyles.colors.textSecondary,
  },
  trophyCircle: {
    width: 21,
    height: 21,
    borderRadius: 11,
    backgroundColor: GlobalStyles.colors.winnerBackground,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: GlobalStyles.colors.winnerShadow,
    elevation: 3,
  },
  containerPressed: {
    backgroundColor: GlobalStyles.colors.borderTransparent,
  },
});
