import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import GlobalStyles from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const CompletionModal = ({ visibility, onCancel }) => {
  return (
    <Modal
      visible={visibility}
      transparent
      statusBarTranslucent
      animationType="fade"
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={onCancel}
        style={styles.backdrop}
      >
        <TouchableWithoutFeedback>
          <View style={styles.modal}>
            <View style={styles.content}>
              <View style={styles.icon}>
                <Ionicons
                  name="checkmark-circle"
                  size={25}
                  color={GlobalStyles.colors.winnerIcon}
                />
              </View>
              <Text style={styles.description}>
                لیگ با قهرمانی{" "}
                <Text style={styles.winner}>منچسترسیتی - حامد</Text> تمام شود؟
              </Text>
            </View>
            <View style={styles.actions}>
              <Pressable
                style={({ pressed }) => [
                  styles.button,
                  styles.completionButton,
                  pressed && styles.completionButtonPressed,
                ]}
              >
                <Text style={[styles.buttonText, styles.completionText]}>
                  اتمام
                </Text>
              </Pressable>
              <Pressable
                onPress={onCancel}
                style={({ pressed }) => [
                  styles.button,
                  styles.cancelButton,
                  pressed && styles.cancelButtonPressed,
                ]}
              >
                <Text style={[styles.buttonText, styles.canceltext]}>
                  انصراف
                </Text>
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default CompletionModal;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.backdrop,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    flexDirection: "column",
    gap: 10,
    width: "85%",
  },
  content: {
    backgroundColor: GlobalStyles.colors.background,
    borderRadius: 22,
    paddingTop: 40,
    paddingBottom: 25,
    paddingHorizontal: 20,
    position: "relative",
    alignItems: "center",
  },
  description: {
    fontFamily: "samim",
    fontSize: 17,
    textAlign: "center",
    color: GlobalStyles.colors.textPrimary,
  },
  winner: {
    fontFamily: "samim",
    fontSize: 17,
    color: GlobalStyles.colors.winnerIcon,
  },
  icon: {
    position: "absolute",
    backgroundColor: GlobalStyles.colors.border,
    borderRadius: 24,
    top: -27,
    padding: 12,
    elevation: 4,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  button: {
    flex: 1,
    borderRadius: 35,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "samim",
    fontSize: 15,
  },
  completionButton: {
    backgroundColor: GlobalStyles.colors.winnerIcon,
  },
  cancelButton: {
    backgroundColor: GlobalStyles.colors.background,
  },
  completionText: {
    color: GlobalStyles.colors.surface,
  },
  canceltext: {
    color: GlobalStyles.colors.textPrimary,
  },
  completionButtonPressed: {
    backgroundColor: GlobalStyles.colors.accent,
  },
  cancelButtonPressed: {
    backgroundColor: GlobalStyles.colors.border,
  },
});
