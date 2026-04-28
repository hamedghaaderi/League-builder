import { useState, useRef, useEffect } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
} from "react-native";
import GlobalStyles from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import LeagueItem from "../components/leagues/league-item";
import ImportModal from "../components/modals/import-modal";

const LeagueListScreen = ({ navigation }) => {
  const [showAddOptions, setShowAddOptions] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);

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
      <View style={styles.container}>
        <FlatList
          data={["", "", "", "", "", "", ""]}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
          ListFooterComponent={<View style={styles.listFooter} />}
          renderItem={({ item }) => {
            return <LeagueItem league={item} />;
          }}
          keyExtractor={(item, index) => index}
        />
        {/* <View style={styles.emptyContainer}>
        <Image
          source={require("../assets/images/empty-league.png")}
          style={styles.emptyImage}
          resizeMode="contain"
        />
        <Text style={styles.emptyText}>هیچ لیگی وجود ندارد.</Text>
        <Text style={styles.emptySubtitle}>
          با زدن روی دکمه{" "}
          <View style={styles.emptyButton}>
            <Ionicons name="add" size={10} color={GlobalStyles.colors.accent} />
          </View>
          ، یک لیگ جدید بساز.
        </Text>
      </View> */}
        <Animated.View style={[styles.addButton, { transform: [{ rotate }] }]}>
          <Pressable onPress={() => setShowAddOptions((_prev) => !_prev)}>
            <Ionicons name="add" size={30} color={GlobalStyles.colors.accent} />
          </Pressable>
        </Animated.View>
        <Animated.View
          style={[styles.createButton, { transform: [{ scale }] }]}
        >
          <Pressable onPress={() => navigation.navigate("LeagueCreate")}>
            <Ionicons
              name="create-outline"
              size={18}
              color={GlobalStyles.colors.accent}
            />
          </Pressable>
        </Animated.View>
        <Animated.View
          style={[styles.importButton, { transform: [{ scale }] }]}
        >
          <Pressable onPress={() => setShowImportModal(true)}>
            <Ionicons
              name="enter-outline"
              size={18}
              color={GlobalStyles.colors.accent}
            />
          </Pressable>
        </Animated.View>
      </View>
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
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  content: {
    gap: 15,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyImage: {
    height: 140,
  },
  emptyText: {
    fontFamily: "samim",
    fontSize: 20,
    textAlign: "center",
    color: GlobalStyles.colors.textPrimary,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontFamily: "samim",
    fontSize: 14,
    textAlign: "center",
    color: GlobalStyles.colors.textPrimary,
  },
  emptyButton: {
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GlobalStyles.colors.primary,
    borderRadius: "100%",
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
  listFooter: {
    height: 70,
    width: "100%",
    backgroundColor: GlobalStyles.colors.background,
  },
});
