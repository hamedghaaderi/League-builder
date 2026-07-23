import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import GlobalStyles from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import Standings from "../../components/leagues/standings";
import Fixtures from "../../components/leagues/fixtures";
import { SceneMap, TabView } from "react-native-tab-view";
import CompletionModal from "../../components/modals/completion-modal";

const PendingLeagueScreen = () => {
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [index, setIndex] = useState(1);

  const routes = [{ key: "fixtures" }, { key: "standings" }];

  const renderScene = SceneMap({
    fixtures: Fixtures,
    standings: Standings,
  });

  return (
    <>
      <View style={styles.informations}>
        <View style={styles.titleRow}>
          <Ionicons
            name="trophy"
            size={45}
            color={GlobalStyles.colors.accent}
          />
          <Text style={styles.titleText}>لیگ اول</Text>
        </View>
        <View style={styles.detailsRow}>
          <View style={styles.detailItem}>
            <Ionicons
              name="people-outline"
              size={16}
              color={GlobalStyles.colors.accent}
            />
            <Text style={styles.detailText}>4 تیم</Text>
          </View>
          <View style={styles.dot} />
          <View style={styles.detailItem}>
            <Ionicons
              name={true ? "repeat" : "arrow-forward"}
              size={16}
              color={GlobalStyles.colors.accent}
            />
            <Text style={styles.detailText}>
              {true ? "رفت و برگشت" : "تک بازی"}
            </Text>
          </View>
          <View style={styles.completionButton}>
            <Pressable
              android_ripple={{
                color: GlobalStyles.colors.secondaryTransparent,
                borderless: true,
              }}
              onPress={() => setShowCompletionModal(true)}
              hitSlop={8}
            >
              <Ionicons
                name="checkmark"
                color={GlobalStyles.colors.accent}
                size={25}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.tabsWrapper}>
        <View style={styles.tabs}>
          <View style={styles.tabItemContainer}>
            <Pressable
              android_ripple={
                index !== 1 && {
                  color: GlobalStyles.colors.secondaryTransparent,
                }
              }
              onPress={() => setIndex(1)}
              style={[styles.tabItem, index === 1 && styles.activeTabItem]}
            >
              <Text
                style={[styles.tabText, index === 1 && styles.activeTabText]}
              >
                جدول
              </Text>
            </Pressable>
          </View>
          <View style={styles.tabItemContainer}>
            <Pressable
              android_ripple={
                index !== 0 && {
                  color: GlobalStyles.colors.secondaryTransparent,
                }
              }
              onPress={() => setIndex(0)}
              style={[styles.tabItem, index === 0 && styles.activeTabItem]}
            >
              <Text
                style={[styles.tabText, index === 0 && styles.activeTabText]}
              >
                بازی ها
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={(i) => setIndex(i)}
        renderTabBar={() => null}
      />
      {showCompletionModal && (
        <CompletionModal
          visibility={showCompletionModal}
          onCancel={() => setShowCompletionModal(false)}
        />
      )}
    </>
  );
};

export default PendingLeagueScreen;

const styles = StyleSheet.create({
  informations: {
    backgroundColor: GlobalStyles.colors.primary,
    padding: 20,
    flexDirection: "column",
    gap: 15,
  },
  titleRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 20,
  },
  titleText: {
    flex: 1,
    fontFamily: "samim",
    fontSize: 30,
    textAlign: "right",
    color: GlobalStyles.colors.surface,
  },
  detailsRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 3,
    position: "relative",
  },
  detailItem: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
  detailText: {
    fontFamily: "samim",
    fontSize: 15,
    marginLeft: 4,
    color: GlobalStyles.colors.surface,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 50,
    backgroundColor: GlobalStyles.colors.accentAlt,
    marginHorizontal: 10,
  },
  completionButton: {
    position: "absolute",
    left: 0,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  tabsWrapper: {
    backgroundColor: GlobalStyles.colors.background,
  },
  tabs: {
    backgroundColor: GlobalStyles.colors.primary,
    padding: 10,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 10,
  },
  tabItemContainer: {
    flex: 1,
    borderRadius: 25,
    overflow: "hidden",
  },
  tabItem: {
    paddingVertical: 7,
    alignItems: "center",
  },
  tabText: {
    fontFamily: "samim",
    fontSize: 14,
    color: GlobalStyles.colors.surface,
  },
  activeTabItem: {
    backgroundColor: GlobalStyles.colors.secondary,
  },
  activeTabText: {
    color: GlobalStyles.colors.accent,
  },
});
