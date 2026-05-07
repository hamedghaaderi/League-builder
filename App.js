import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LeagueListScreen from "./screens/league-list-screen";
import LeagueCreateScreen from "./screens/leagues/league-create-screen";
import PendingLeagueScreen from "./screens/leagues/pending-league-screen";
import CompleteLeagueScreen from "./screens/leagues/complete-league-screen";
import DeveloperScreen from "./screens/developer-screen";
import TabBar from "./components/ui/tab-bar";
import { useFonts } from "expo-font";
import GlobalStyles from "./constants/colors";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import EditModal from "./components/modals/edit-modal";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function Tabs() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary,
        },
        headerTintColor: GlobalStyles.colors.accent,
        headerTitleStyle: { fontFamily: "samim" },
        headerTitleAlign: "center",
      }}
      tabBar={(_props) => <TabBar {..._props} />}
    >
      {/* Tabs Initial Screens */}
      <BottomTabs.Screen
        name="LeagueList"
        component={LeagueListScreen}
        options={{
          title: "لیگ ها",
        }}
      />
      <BottomTabs.Screen
        name="Developer"
        component={DeveloperScreen}
        options={{
          title: "توسعه دهنده",
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  useFonts({
    samim: require("./assets/fonts/Samim.ttf"),
  });

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary,
            },
            headerTintColor: GlobalStyles.colors.accent,
            headerTitleStyle: { fontFamily: "samim" },
            headerTitleAlign: "center",
            animation: "fade",
          }}
        >
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{ headerShown: false }}
          />

          {/* League Screens */}
          <Stack.Screen
            name="PendingLeague"
            component={PendingLeagueScreen}
            options={{
              title: "",
              headerShadowVisible: false,
              headerRight: ({ tintColor }) => {
                const [showEditModal, setShowEditModal] = useState(false);

                return (
                  <>
                    <Pressable onPress={() => setShowEditModal(true)}>
                      <Ionicons name="pencil" size={22} color={tintColor} />
                    </Pressable>
                    {showEditModal && (
                      <EditModal
                        visibility={showEditModal}
                        onCancel={() => setShowEditModal(false)}
                      />
                    )}
                  </>
                );
              },
            }}
          />
          <Stack.Screen
            name="CompleteLeague"
            component={CompleteLeagueScreen}
            options={{
              title: "",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="LeagueCreate"
            component={LeagueCreateScreen}
            options={{
              title: "ساخت لیگ جدید",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
