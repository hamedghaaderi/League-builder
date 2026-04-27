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
import { Controller, useForm } from "react-hook-form";
import * as DocumentPicker from "expo-document-picker";
import formattedFileSize from "../../utils/file-size";

const ImportModal = ({ visibility, onCancel }) => {
  const {
    control,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      file: null,
    },
  });

  const handlePickFile = async (onChange) => {
    const result = await DocumentPicker.getDocumentAsync({
      type: "*/*",
      multiple: false,
    });

    if (result) {
      if (result.canceled) {
        return;
      }

      const file = result.assets[0];

      onChange(file);
    }
  };

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
              <Controller
                name="file"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => {
                  return (
                    <View style={styles.inputContainer}>
                      <Text style={styles.description}>
                        <Text style={styles.title}>فایل لیگ</Text> را انتخاب
                        کنید:
                      </Text>
                      <Pressable
                        onPress={() => handlePickFile(onChange)}
                        style={styles.chooseButton}
                      >
                        <Ionicons
                          name="document"
                          size={20}
                          color={GlobalStyles.colors.secondary}
                        />
                        <Text style={styles.chooseText}>انتخاب فایل</Text>
                      </Pressable>
                      {value && (
                        <View style={styles.fileContainer}>
                          <View style={styles.fileContent}>
                            <Ionicons
                              name="document-text"
                              size={20}
                              color={GlobalStyles.colors.secondary}
                            />
                            <View style={styles.fileInformations}>
                              <Text style={styles.fileName}>{value.name}</Text>
                              <Text style={styles.fileSize}>
                                {formattedFileSize(value.size)}
                              </Text>
                            </View>
                          </View>
                          <Pressable onPress={() => reset()}>
                            <Ionicons
                              name="trash"
                              size={20}
                              color={GlobalStyles.colors.red}
                            />
                          </Pressable>
                        </View>
                      )}
                    </View>
                  );
                }}
              />
            </View>
            <View style={styles.actions}>
              <Pressable style={[styles.button, styles.importButton]}>
                <Text style={[styles.buttonText, styles.importText]}>
                  افزودن
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
    color: GlobalStyles.colors.secondary,
  },
  chooseButton: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.secondary,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: GlobalStyles.colors.textPrimary,
  },
  chooseText: {
    fontFamily: "samim",
    fontSize: 15,
    textAlign: "right",
  },
  fileContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 25,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: GlobalStyles.colors.border,
  },
  fileContent: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 10,
  },
  fileInformations: {
    flex: 1,
    maxWidth: 205,
  },
  fileName: {
    direction: "rtl",
    fontFamily: "samim",
    fontSize: 13,
    color: GlobalStyles.colors.textPrimary,
  },
  fileSize: {
    direction: "rtl",
    fontFamily: "samim",
    fontSize: 10,
    color: GlobalStyles.colors.textSecondary,
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
