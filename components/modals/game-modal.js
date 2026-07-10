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
import WheelPicker from "@quidone/react-native-wheel-picker";

const scores = [...Array(100).keys()].map((i) => ({ value: i }));

const GameModal = ({ visibility, onCancel }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      home: 0,
      away: 0,
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
                  name="football"
                  size={25}
                  color={GlobalStyles.colors.accentAlt}
                />
              </View>
              <Text style={styles.description}>
                <Text style={styles.title}>نتیجه بازی</Text> را وارد کنید:
              </Text>
              <View style={styles.scoreContainer}>
                <View style={styles.team}>
                  <Text style={styles.teamText}>منچستر سیتی - حامد</Text>
                </View>
                <View style={styles.result}>
                  <Controller
                    name="home"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => {
                      return (
                        <WheelPicker
                          data={scores}
                          value={value}
                          onValueChanged={({ item: { value } }) =>
                            onChange(value)
                          }
                          enableScrollByTapOnItem={true}
                          visibleItemCount={1}
                          itemHeight={40}
                          itemTextStyle={styles.pickerText}
                          overlayItemStyle={styles.pickerOverlay}
                        />
                      );
                    }}
                  />
                  <View style={styles.dash}></View>
                  <Controller
                    name="away"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => {
                      return (
                        <WheelPicker
                          data={scores}
                          value={value}
                          onValueChanged={({ item: { value } }) =>
                            onChange(value)
                          }
                          enableScrollByTapOnItem={true}
                          visibleItemCount={1}
                          itemHeight={40}
                          itemTextStyle={styles.pickerText}
                          overlayItemStyle={styles.pickerOverlay}
                        />
                      );
                    }}
                  />
                </View>
                <View style={styles.team}>
                  <Text style={styles.teamText}>حسین - ریال مادرید</Text>
                </View>
              </View>
            </View>
            <View style={styles.actions}>
              <View style={styles.buttonContainer}>
                <Pressable
                  android_ripple={{
                    color: GlobalStyles.colors.accentAltRipple,
                  }}
                  style={[styles.button, styles.submitButton]}
                >
                  <Text style={[styles.buttonText, styles.submitText]}>
                    ذخیره
                  </Text>
                </Pressable>
              </View>
              <View style={styles.buttonContainer}>
                <Pressable
                  android_ripple={{ color: GlobalStyles.colors.mainRipple }}
                  onPress={onCancel}
                  style={[styles.button, styles.cancelButton]}
                >
                  <Text style={[styles.buttonText, styles.canceltext]}>
                    انصراف
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default GameModal;

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
    flexDirection: "column",
    gap: 15,
  },
  icon: {
    position: "absolute",
    backgroundColor: GlobalStyles.colors.border,
    borderRadius: 24,
    top: -27,
    padding: 12,
    elevation: 4,
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
  scoreContainer: {
    width: "100%",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 15,
  },
  team: {
    flex: 35,
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
    flex: 30,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
  },
  pickerText: {
    fontFamily: "samim",
    color: GlobalStyles.colors.textPrimary,
    fontSize: 17,
    paddingHorizontal: 9,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.accentAlt,
  },
  pickerOverlay: {
    backgroundColor: GlobalStyles.colors.background,
  },
  dash: {
    width: 7,
    height: 2.5,
    borderRadius: 2,
    backgroundColor: GlobalStyles.colors.accentAlt,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  buttonContainer: {
    flex: 1,
    borderRadius: 35,
    overflow: "hidden",
  },
  button: {
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "samim",
    fontSize: 15,
  },
  submitButton: {
    backgroundColor: GlobalStyles.colors.accentAlt,
  },
  cancelButton: {
    backgroundColor: GlobalStyles.colors.background,
  },
  submitText: {
    color: GlobalStyles.colors.surface,
  },
  canceltext: {
    color: GlobalStyles.colors.textPrimary,
  },
});
