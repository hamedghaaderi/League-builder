import { useState, useRef, useEffect } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import GlobalStyles from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import ImportModal from "../components/modals/import-modal";
import { SceneMap, TabView } from "react-native-tab-view";
import PendingLeagues from "../components/leagues/pending-leagues";
import CompleteLeagues from "../components/leagues/complete-leagues";
import { LinearGradient } from "expo-linear-gradient";

const LeagueListScreen = ({ navigation }) => {
  const [index, setIndex] = useState(1);
  const [showAddOptions, setShowAddOptions] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);

  const routes = [{ key: "complete" }, { key: "pending" }];

  const renderScene = SceneMap({
    complete: CompleteLeagues,
    pending: PendingLeagues,
  });

  const rotateAnim = useRef(new Animated.Value(0)).current;

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "135deg"],
  });
  const scale = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: showAddOptions ? 1 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [showAddOptions]);

  return (
    <>
      <LinearGradient
        colors={[
          GlobalStyles.colors.gradient100,
          GlobalStyles.colors.gradient50,
          GlobalStyles.colors.gradient0,
        ]}
        style={styles.gradientLayer}
      />
      <View style={styles.tabsWrapper}>
        <View style={styles.glassLayer} />
        <View style={styles.tabsRow}>
          <Pressable
            style={({ pressed }) => [
              styles.tabButton,
              index === 1 && styles.activeTabButton,
              pressed && index !== 1 && styles.tabButtonPressed,
            ]}
            onPress={() => setIndex(1)}
          >
            <Text style={[styles.tabText, index === 1 && styles.activeTabText]}>
              در حال انجام
            </Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.tabButton,
              index === 0 && styles.activeTabButton,
              pressed && index !== 0 && styles.tabButtonPressed,
            ]}
            onPress={() => setIndex(0)}
          >
            <Text style={[styles.tabText, index === 0 && styles.activeTabText]}>
              تمام شده
            </Text>
          </Pressable>
        </View>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={(i) => setIndex(i)}
        renderTabBar={() => null}
      />
      <Animated.View style={[styles.addButton, { transform: [{ rotate }] }]}>
        <Pressable
          onPress={() => setShowAddOptions((_prev) => !_prev)}
          style={({ pressed }) => [
            styles.addPressable,
            pressed && styles.addButtonPressed,
          ]}
        >
          <Ionicons name="add" size={30} color={GlobalStyles.colors.accent} />
        </Pressable>
      </Animated.View>
      <Animated.View style={[styles.createButton, { transform: [{ scale }] }]}>
        <Pressable
          onPress={() => navigation.navigate("LeagueCreate")}
          style={({ pressed }) => [
            styles.smallButtonPressable,
            pressed && styles.smallButtonPressed,
          ]}
        >
          <Ionicons
            name="create-outline"
            size={18}
            color={GlobalStyles.colors.accent}
          />
        </Pressable>
      </Animated.View>
      <Animated.View style={[styles.importButton, { transform: [{ scale }] }]}>
        <Pressable
          onPress={() => setShowImportModal(true)}
          style={({ pressed }) => [
            styles.smallButtonPressable,
            pressed && styles.smallButtonPressed,
          ]}
        >
          <Ionicons
            name="enter-outline"
            size={18}
            color={GlobalStyles.colors.accent}
          />
        </Pressable>
      </Animated.View>
      {showImportModal && (
        <ImportModal
          visibility={showImportModal}
          onCancel={() => setShowImportModal(false)}
        />
      )}
    </>
  );
};

export default LeagueListScreen;

const styles = StyleSheet.create({
  tabsWrapper: {
    position: "absolute",
    top: 20,
    left: 20,
    right: 20,
    height: 45,
    zIndex: 100,
    borderRadius: 35,
    overflow: "hidden",
  },
  gradientLayer: {
    position: "absolute",
    height: 65,
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0,
  },
  glassLayer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: GlobalStyles.colors.borderTransparent,
    borderRadius: 35,
    elevation: 5,
  },
  tabsRow: {
    flexDirection: "row-reverse",
    flex: 1,
    gap: 6,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 6,
  },
  tabButton: {
    borderRadius: 35,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  tabText: {
    fontFamily: "samim",
    color: GlobalStyles.colors.textSecondary,
    fontSize: 14,
    fontWeight: "600",
  },
  activeTabButton: {
    backgroundColor: GlobalStyles.colors.primary,
  },
  activeTabText: {
    color: GlobalStyles.colors.accent,
  },
  addButton: {
    position: "absolute",
    right: 10,
    bottom: 80,
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
  },
  addPressable: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary,
  },
  createButton: {
    position: "absolute",
    right: 20,
    bottom: 150,
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
  },
  importButton: {
    position: "absolute",
    right: 20,
    bottom: 200,
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
  },
  smallButtonPressable: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.secondary,
  },
  tabButtonPressed: {
    backgroundColor: GlobalStyles.colors.borderTransparent,
  },
  addButtonPressed: {
    backgroundColor: GlobalStyles.colors.primaryDark,
  },
  smallButtonPressed: {
    backgroundColor: GlobalStyles.colors.primary,
  },
});
