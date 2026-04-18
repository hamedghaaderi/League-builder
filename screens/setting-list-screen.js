import { ScrollView, StyleSheet, View } from "react-native";
import GlobalStyles from "../constants/colors";
import SettingItem from "../components/settings/setting-item";

const SettingListScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SettingItem icon="code-slash">درباره توسعه دهنده</SettingItem>
        <SettingItem icon="football">افزودن تیم</SettingItem>
        <View style={styles.listFooter} />
      </ScrollView>
    </View>
  );
};

export default SettingListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  listFooter: {
    height: 70,
    width: "100%",
    backgroundColor: GlobalStyles.colors.background,
  },
});
