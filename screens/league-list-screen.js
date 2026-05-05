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
          "rgba(217, 220, 233, 1)",
          "rgba(236, 239, 252, 1)",
          "rgba(255, 255, 255, 0)",
        ]}
        style={styles.gradientLayer}
      />
      <View style={styles.tabsWrapper}>
        <View style={styles.glassLayer} />
        <View style={styles.tabsRow}>
          <TouchableOpacity
            style={[styles.tabButton, index === 1 && styles.activeTabButton]}
            onPress={() => setIndex(1)}
          >
            <Text style={[styles.tabText, index === 1 && styles.activeTabText]}>
              در حال انجام
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, index === 0 && styles.activeTabButton]}
            onPress={() => setIndex(0)}
          >
            <Text style={[styles.tabText, index === 0 && styles.activeTabText]}>
              تمام شده
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={(i) => setIndex(i)}
        renderTabBar={() => null}
      />
      <Animated.View style={[styles.addButton, { transform: [{ rotate }] }]}>
        <Pressable onPress={() => setShowAddOptions((_prev) => !_prev)}>
          <Ionicons name="add" size={30} color={GlobalStyles.colors.accent} />
        </Pressable>
      </Animated.View>
      <Animated.View style={[styles.createButton, { transform: [{ scale }] }]}>
        <Pressable onPress={() => navigation.navigate("LeagueCreate")}>
          <Ionicons
            name="create-outline"
            size={18}
            color={GlobalStyles.colors.accent}
          />
        </Pressable>
      </Animated.View>
      <Animated.View style={[styles.importButton, { transform: [{ scale }] }]}>
        <Pressable onPress={() => setShowImportModal(true)}>
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
    backgroundColor: GlobalStyles.colors.primaryTransparent,
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GlobalStyles.colors.primary,
    borderRadius: 30,
  },
  createButton: {
    position: "absolute",
    right: 20,
    bottom: 150,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: GlobalStyles.colors.secondary,
  },
  importButton: {
    position: "absolute",
    right: 20,
    bottom: 200,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: GlobalStyles.colors.secondary,
  },
});
