import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";

const LeagueScreen = () => {
  const { navigate } = useNavigation();

  return (
    <View>
      <Pressable
        onPress={() => {
          navigate("LeagueEdit");
        }}
      >
        <Text>go to league edit screen</Text>
      </Pressable>
      <Text>LeagueScreen</Text>
    </View>
  );
};

export default LeagueScreen;
