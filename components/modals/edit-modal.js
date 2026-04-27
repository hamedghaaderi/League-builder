import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
  TextInput,
} from "react-native";
import GlobalStyles from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Controller, useForm } from "react-hook-form";

const EditModal = ({ visibility, onCancel }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "لیگ اول",
    },
  });

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
                  name="pencil"
                  size={25}
                  color={GlobalStyles.colors.accentAlt}
                />
              </View>
              <Controller
                name="title"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => {
                  return (
                    <View style={styles.inputContainer}>
                      <Text style={styles.description}>
                        <Text style={styles.title}>عنوان لیگ</Text> را ویرایش
                        کنید:
                      </Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={onChange}
                        value={value}
                        autoCorrect={false}
                        placeholder="عنوان"
                      />
                    </View>
                  );
                }}
              />
            </View>
            <View style={styles.actions}>
              <Pressable style={[styles.button, styles.confirmButton]}>
                <Text style={[styles.buttonText, styles.confirmText]}>
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

export default EditModal;

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
  inputContainer: {
    width: "100%",
    flexDirection: "column",
    gap: 15,
  },
  description: {
    fontFamily: "samim",
    fontSize: 17,
    textAlign: "center",
    color: GlobalStyles.colors.textPrimary,
  },
  title: {
    fontFamily: "samim",
    fontSize: 17,
    color: GlobalStyles.colors.accentAlt,
  },
  input: {
    fontFamily: "samim",
    fontSize: 15,
    direction: "rtl",
    textAlign: "right",
    borderWidth: 1,
    borderColor: GlobalStyles.colors.accentAlt,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: GlobalStyles.colors.textPrimary,
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
  confirmButton: {
    backgroundColor: GlobalStyles.colors.accentAlt,
  },
  cancelButton: {
    backgroundColor: GlobalStyles.colors.background,
  },
  confirmText: {
    color: GlobalStyles.colors.surface,
  },
  canceltext: {
    color: GlobalStyles.colors.textPrimary,
  },
});
