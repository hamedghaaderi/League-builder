import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState, useTransition } from "react";
import GlobalStyles from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import Standings from "../../components/leagues/standings";
import Fixtures from "../../components/leagues/fixtures";

const LeagueScreen = () => {
  const [selectedTab, setSelectedTab] = useState("standings");
  const [, startTransition] = useTransition();

  const handleTabChange = (tab) => {
    startTransition(() => {
      setSelectedTab(tab);
    });
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
          <Pressable
            onPress={() => handleTabChange("standings")}
            style={[
              styles.tabItem,
              selectedTab === "standings" && styles.activeTabItem,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === "standings" && styles.activeTabText,
              ]}
            >
              جدول
            </Text>
          </Pressable>
          <Pressable
            onPress={() => handleTabChange("fixtures")}
            style={[
              styles.tabItem,
              selectedTab === "fixtures" && styles.activeTabItem,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === "fixtures" && styles.activeTabText,
              ]}
            >
              بازی ها
            </Text>
          </Pressable>
        </View>
      </View>
      {selectedTab === "standings" && <Standings />}
      {selectedTab === "fixtures" && <Fixtures />}
    </>
  );
};

export default LeagueScreen;

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
    paddingBottom: 10,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 10,
  },
  tabItem: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 25,
    alignItems: "center",
  },
  tabText: {
    fontFamily: "samim",
    fontSize: 15,
    color: GlobalStyles.colors.surface,
  },
  activeTabItem: {
    backgroundColor: GlobalStyles.colors.secondary,
  },
  activeTabText: {
    color: GlobalStyles.colors.accent,
  },
});
