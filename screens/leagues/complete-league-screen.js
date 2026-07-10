import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import GlobalStyles from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import Standings from "../../components/leagues/standings";
import Fixtures from "../../components/leagues/fixtures";
import { TabView } from "react-native-tab-view";

const CompleteLeagueScreen = () => {
  const [index, setIndex] = useState(1);

  const routes = [{ key: "fixtures" }, { key: "standings" }];

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "fixtures":
        return <Fixtures fixed />;
      case "standings":
        return <Standings />;
      default:
        return null;
    }
  };

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
        <View style={styles.winnerRow}>
          <View style={styles.trophyCircle}>
            <Ionicons
              name="ribbon"
              size={16}
              color={GlobalStyles.colors.winnerIcon}
            />
          </View>
          <Text style={styles.winnerText}>منچسترسیتی - حامد</Text>
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
    </>
  );
};

export default CompleteLeagueScreen;

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
  winnerRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: GlobalStyles.colors.winnerBackground,
    padding: 6,
    paddingLeft: 12,
    borderRadius: 20,
    gap: 6,
  },
  trophyCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: GlobalStyles.colors.winnerBackground,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: GlobalStyles.colors.winnerShadow,
    elevation: 5,
  },
  winnerText: {
    fontFamily: "samim",
    fontSize: 15,
    color: GlobalStyles.colors.surface,
    fontWeight: "600",
  },
});
