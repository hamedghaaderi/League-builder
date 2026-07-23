import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GlobalStyles from "../../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <>
      <LinearGradient
        colors={[
          GlobalStyles.colors.gradient0,
          GlobalStyles.colors.gradient50,
          GlobalStyles.colors.gradient100,
        ]}
        style={styles.gradientLayer}
      />
      <View style={styles.container}>
        <View style={styles.glassLayer} />
        <View style={styles.tabsRow}>
          {state.routes.map((route, index) => {
            const {
              options: { title },
            } = descriptors[route.key];
            const isFocused = state.index === index;

            return (
              <View key={route.key} style={styles.tabButtonContainer}>
                <Pressable
                  android_ripple={
                    !isFocused && {
                      color: GlobalStyles.colors.primaryTransparent,
                    }
                  }
                  style={[
                    styles.tabButton,
                    isFocused && styles.activeTabButton,
                  ]}
                  onPress={() => navigation.navigate(route.name)}
                >
                  <Text
                    style={[styles.tabText, isFocused && styles.activeTabText]}
                  >
                    {title}
                  </Text>
                  {title === "لیگ ها" && (
                    <Ionicons
                      name="trophy"
                      size={18}
                      color={
                        isFocused
                          ? GlobalStyles.colors.accent
                          : GlobalStyles.colors.surface
                      }
                    />
                  )}
                  {title === "توسعه دهنده" && (
                    <Ionicons
                      name="code-slash"
                      size={18}
                      color={
                        isFocused
                          ? GlobalStyles.colors.accent
                          : GlobalStyles.colors.surface
                      }
                    />
                  )}
                </Pressable>
              </View>
            );
          })}
        </View>
      </View>
    </>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    height: 60,
    borderRadius: 35,
    overflow: "hidden",
  },
  gradientLayer: {
    position: "absolute",
    height: 70,
    bottom: 0,
    left: 0,
    right: 0,
  },
  glassLayer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: GlobalStyles.colors.secondaryTransparent,
    borderRadius: 35,
    elevation: 5,
  },
  tabsRow: {
    flexDirection: "row",
    flex: 1,
    gap: 10,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
  },
  tabButtonContainer: {
    flex: 1,
    borderRadius: 35,
    overflow: "hidden",
  },
  tabButton: {
    borderRadius: 35,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    justifyContent: "center",
    height: "100%",
  },
  tabText: {
    fontFamily: "samim",
    color: GlobalStyles.colors.surface,
    fontSize: 16,
    fontWeight: "600",
  },
  activeTabButton: {
    backgroundColor: GlobalStyles.colors.primary,
  },
  activeTabText: {
    color: GlobalStyles.colors.accent,
  },
});
