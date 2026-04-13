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
import AboutDeveloperScreen from "./screens/settings/about-developer-screen";
import ThemeScreen from "./screens/settings/theme-screen";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function Tabs() {
  return (
    <BottomTabs.Navigator
    >
      {/* Tabs Initial Screens */}
      <BottomTabs.Screen
        name="LeagueList"
        component={LeagueListScreen}
      />
      <BottomTabs.Screen
        name="SettingList"
        component={SettingListScreen}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
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
          />
          <Stack.Screen
            name="LeagueCreate"
            component={LeagueCreateScreen}
          />
          <Stack.Screen
            name="LeagueImport"
            component={LeagueImportScreen}
          />
          <Stack.Screen
            name="LeagueEdit"
            component={LeagueEditScreen}
          />
          <Stack.Screen
            name="LeagueStandings"
            component={LeagueStandingsScreen}
          />
          <Stack.Screen
            name="LeagueFixtures"
            component={LeagueFixturesScreen}
          />

          {/* Setting Screens */}
          <Stack.Screen
            name="Theme"
            component={ThemeScreen}
          />
          <Stack.Screen
            name="AboutDeveloper"
            component={AboutDeveloperScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
