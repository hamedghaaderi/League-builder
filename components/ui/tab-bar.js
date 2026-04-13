import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GlobalStyles from "../../constants/colors";

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.glassLayer} />
      <View style={styles.tabsRow}>
        {state.routes.map((route, index) => {
          const {
            options: { title },
          } = descriptors[route.key];
          const isFocused = state.index === index;

          return (
            <TouchableOpacity
              key={route.key}
              style={[styles.tabButton, isFocused && styles.activeTabButton]}
              onPress={() => navigation.navigate(route.name)}
            >
              <Text style={[styles.tabText, isFocused && styles.activeTabText]}>
                {title}
              </Text>
              {title === "لیگ ها" && (
                <Ionicons
                  name="football"
                  style={[styles.tabIcon, isFocused && styles.activeTabText]}
                />
              )}
              {title === "تنظیمات" && (
                <Ionicons
                  name="settings"
                  style={[styles.tabIcon, isFocused && styles.activeTabText]}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
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
  tabButton: {
    borderRadius: 35,
    flexDirection: "row",
    flex: 1,
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
  tabIcon: {
    fontSize: 18,
    color: GlobalStyles.colors.surface,
  },
  activeTabButton: {
    backgroundColor: GlobalStyles.colors.primaryTransparent,
  },
  activeTabText: {
    color: GlobalStyles.colors.accent,
  },
});
