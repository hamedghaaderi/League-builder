import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LeagueListScreen from "./screens/league-list-screen";
import SettingListScreen from "./screens/setting-list-screen";
import LeagueCreateScreen from "./screens/leagues/league-create-screen";
import LeagueImportScreen from "./screens/leagues/league-import-screen";
import LeagueScreen from "./screens/leagues/league-screen";
import LeagueEditScreen from "./screens/leagues/league-edit-screen";
import LeagueStandingsScreen from "./screens/leagues/league-standings-screen";
import LeagueFixturesScreen from "./screens/leagues/league-fixtures-screen";
import DeveloperScreen from "./screens/settings/developer-screen";
import CreateTeamScreen from "./screens/settings/create-team-screen";
import TabBar from "./components/ui/tab-bar";
import { useFonts } from "expo-font";
import GlobalStyles from "./constants/colors";

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
        name="SettingList"
        component={SettingListScreen}
        options={{
          title: "تنظیمات",
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
            name="League"
            component={LeagueScreen}
            options={{
              title: "لیگ",
            }}
          />
          <Stack.Screen
            name="LeagueCreate"
            component={LeagueCreateScreen}
            options={{
              title: "ساخت لیگ",
            }}
          />
          <Stack.Screen
            name="LeagueImport"
            component={LeagueImportScreen}
            options={{
              title: "وارد کردن لیگ",
            }}
          />
          <Stack.Screen
            name="LeagueEdit"
            component={LeagueEditScreen}
            options={{
              title: "ویرایش",
            }}
          />
          <Stack.Screen
            name="LeagueStandings"
            component={LeagueStandingsScreen}
            options={{
              title: "جدول",
            }}
          />
          <Stack.Screen
            name="LeagueFixtures"
            component={LeagueFixturesScreen}
            options={{
              title: "بازی ها",
            }}
          />

          {/* Setting Screens */}
          <Stack.Screen
            name="createTeam"
            component={CreateTeamScreen}
            options={{
              title: "افزودن تیم",
            }}
          />
          <Stack.Screen
            name="Developer"
            component={DeveloperScreen}
            options={{
              title: "توسعه دهنده",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
