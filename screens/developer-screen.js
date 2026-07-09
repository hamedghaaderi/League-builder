import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Linking,
} from "react-native";
import GlobalStyles from "../constants/colors";
import Linkedin from "../components/logos/linkedin";
import Github from "../components/logos/github";
import Instagram from "../components/logos/instagram";
import Whatsapp from "../components/logos/whatsapp";

const links = [
  { logo: Linkedin, url: "https://linkedin.com/in/hamedghaaderi" },
  { logo: Github, url: "https://github.com/hamedghaaderi" },
  { logo: Instagram, url: "https://instagram.com/_hamedghaderi" },
  { logo: Whatsapp, url: "https://wa.me/+989022669455" },
];

const DeveloperScreen = () => {
  const goToLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require("../assets/images/profile.png")}
          style={styles.profile}
          resizeMode="contain"
        />
        <View style={styles.section}>
          <Text style={styles.title}>نام</Text>
          <View style={styles.card}>
            <Text style={styles.text}>حامد قادری</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>درباره من</Text>
          <View style={styles.card}>
            <Text style={styles.text}>
              من متولد ۲۳ تیر ماه سال ۱۳۸۲ در شهر اصفهان و برنامه‌نویس Front-End
              هستم. مسلط به زبان های برنامه‌نویسی JavaScript و TypeScript،
              تکنولوژی‌هایی مانند React و React Native و TailwindCSS و سایر
              ابزارها هستم. توانایی اجرای پروژه‌های حرفه‌ای مانند فروشگاه‌های
              آنلاین، اپلیکیشن‌های موبایل و سیستم‌های احراز هویت کاربران را
              دارم. همچنین تجربه کار با سیستم عامل Linux و توسعه پروژه‌ها بر
              بستر آن را دارم. هم اکنون به عنوان توسعه دهنده Front-End در شرکت
              دانش بنیان بهبود ارتباط چهلستون (بهامد)، واقع در شهرک علمی و
              تحقیقاتی اصفهان، مشغول به کار هستم.
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>راه‌های ارتباطی</Text>
          <View style={styles.links}>
            {links.map((_link, _index) => (
              <Pressable
                key={_index}
                onPress={() => goToLink(_link.url)}
                style={({ pressed }) => [
                  styles.linkItem,
                  pressed && styles.linkItemPressed,
                ]}
              >
                <_link.logo />
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DeveloperScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background,
    paddingHorizontal: 20,
  },
  content: {
    gap: 20,
    paddingTop: 20,
    paddingBottom: 90,
  },
  section: {
    gap: 10,
  },
  title: {
    fontFamily: "samim",
    fontSize: 17,
    color: GlobalStyles.colors.textPrimary,
    textAlign: "right",
    marginRight: 10,
  },
  profile: {
    alignSelf: "center",
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  card: {
    backgroundColor: GlobalStyles.colors.border,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 14,
  },
  text: {
    fontFamily: "samim",
    textAlign: "justify",
    direction: "rtl",
    fontSize: 15,
    lineHeight: 24,
    color: GlobalStyles.colors.textPrimary,
  },
  links: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  linkItem: {
    width: "20%",
    backgroundColor: GlobalStyles.colors.border,
    borderRadius: 14,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  linkItemPressed: {
    backgroundColor: GlobalStyles.colors.borderTransparent,
  },
});
