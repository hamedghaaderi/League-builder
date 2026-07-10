import { Pressable, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../constants/colors";
import { useState } from "react";
import GameModal from "../modals/game-modal";

const Game = ({ game, editable }) => {
  const [showGameModal, setShowGameModal] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <Pressable
          android_ripple={editable && { color: GlobalStyles.colors.mainRipple }}
          onPress={() => editable && setShowGameModal(true)}
          style={styles.card}
        >
          <View style={styles.team}>
            <Text style={styles.teamText}>منچستر سیتی - حامد</Text>
          </View>
          <View style={styles.result}>
            <Text style={styles.score}>15</Text>
            <View style={styles.dash}></View>
            <Text style={styles.score}>10</Text>
          </View>
          <View style={styles.team}>
            <Text style={styles.teamText}>حسین - ریال مادرید</Text>
          </View>
        </Pressable>
      </View>
      {showGameModal && editable && (
        <GameModal
          visibility={showGameModal}
          onCancel={() => setShowGameModal(false)}
        />
      )}
    </>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    overflow: "hidden",
  },
  card: {
    width: "100%",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: GlobalStyles.colors.border,
    paddingHorizontal: 16,
    paddingVertical: 20,
    gap: 10,
  },
  team: {
    flex: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  teamText: {
    fontFamily: "samim",
    textAlign: "center",
    direction: "rtl",
    color: GlobalStyles.colors.textPrimary,
    fontSize: 13,
  },
  result: {
    flex: 20,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
  },
  score: {
    flex: 50,
    fontFamily: "samim",
    textAlign: "center",
    color: GlobalStyles.colors.textPrimary,
    fontSize: 17,
  },
  dash: {
    width: 7,
    height: 2.5,
    borderRadius: 2,
    backgroundColor: GlobalStyles.colors.accentAlt,
  },
});
