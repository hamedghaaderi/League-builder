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

const ImportModal = ({ visibility, onCancel }) => {
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
                  name="enter-outline"
                  size={25}
                  color={GlobalStyles.colors.secondary}
                />
              </View>
              {/* محتوای  این مودال */}
            </View>
            <View style={styles.actions}>
              <Pressable style={[styles.button, styles.importButton]}>
                <Text style={[styles.buttonText, styles.importText]}>
                  تایید
                </Text>
              </Pressable>
              <Pressable
                onPress={onCancel}
                style={[styles.button, styles.cancelButton]}
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

export default ImportModal;

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
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "samim",
    fontSize: 15,
  },
  importButton: {
    backgroundColor: GlobalStyles.colors.secondary,
  },
  cancelButton: {
    backgroundColor: GlobalStyles.colors.background,
  },
  importText: {
    color: GlobalStyles.colors.surface,
  },
  canceltext: {
    color: GlobalStyles.colors.textPrimary,
  },
});
