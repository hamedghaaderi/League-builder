import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../constants/colors";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import Input from "../../components/form/input";
import Radio from "../../components/form/radio";
import { Ionicons } from "@expo/vector-icons";
import { useLayoutEffect } from "react";

const LeagueCreateScreen = ({ navigation }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      type: "two-leg",
      teams: [
        { team: "", player: "" },
        { team: "", player: "" },
        { team: "", player: "" },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "teams",
  });

  const removeTeam = (i) => {
    remove(i);

    if (fields.length <= 3) {
      append({ team: "", player: "" });
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <Pressable
          style={[styles.submitButton, { backgroundColor: tintColor }]}
        >
          <Text style={styles.submitText}>افزودن</Text>
        </Pressable>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Controller
          name="title"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              label="عنوان"
              placeholder="عنوان لیگ را وارد کنید"
              value={value}
              onChange={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="type"
          rules={{
            required: true,
          }}
          render={({ field: { value, onChange } }) => (
            <Radio
              label="نوع"
              options={[
                { value: "two-leg", text: "رفت و برگشت" },
                { value: "one-leg", text: "تک بازی" },
              ]}
              value={value}
              onChange={onChange}
            />
          )}
        />
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>
            تیم ها <Text style={styles.labelHint}>(حداقل سه تیم)</Text>
          </Text>
          {fields.map((_field, _index) => (
            <View key={_field.id} style={styles.teamFieldsContainer}>
              <Controller
                control={control}
                name={`teams.${_index}.player`}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    value={value}
                    onChange={onChange}
                    placeholder="نام بازیکن را وارد کنید"
                    withoutLabel
                  />
                )}
              />
              <Controller
                control={control}
                name={`teams.${_index}.team`}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    value={value}
                    onChange={onChange}
                    placeholder="نام تیم را وارد کنید"
                    withoutLabel
                  />
                )}
              />
              <Pressable onPress={() => removeTeam(_index)}>
                <Ionicons
                  name="trash"
                  size={19}
                  color={GlobalStyles.colors.red}
                />
              </Pressable>
            </View>
          ))}
          <Pressable
            style={styles.addTeamButton}
            onPress={() => append({ team: "", player: "" })}
          >
            <Text style={styles.addTeamText}>افزودن تیم</Text>
            <Ionicons
              name="add"
              size={16}
              color={GlobalStyles.colors.surface}
            />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default LeagueCreateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background,
    paddingHorizontal: 20,
  },
  content: {
    gap: 20,
    paddingVertical: 20,
  },
  fieldContainer: {
    alignItems: "flex-end",
    flexDirection: "column",
    gap: 13,
  },
  label: {
    fontFamily: "samim",
    marginRight: 10,
    fontSize: 17,
    textAlign: "center",
    color: GlobalStyles.colors.textPrimary,
  },
  labelHint: {
    fontSize: 12,
    color: GlobalStyles.colors.textSecondary,
  },
  teamFieldsContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  addTeamButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderRadius: 12,
    paddingVertical: 7,
    paddingLeft: 11,
    paddingRight: 6,
    backgroundColor: GlobalStyles.colors.primary,
  },
  addTeamText: {
    fontFamily: "samim",
    fontSize: 12,
    color: GlobalStyles.colors.surface,
  },
  submitButton: {
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 15,
  },
  submitText: {
    fontFamily: "samim",
    fontSize: 14,
    color: GlobalStyles.colors.primary,
  },
});
