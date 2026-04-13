import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";

const LeagueListScreen = () => {
  const { navigate } = useNavigation();

  return (
    <View>
      <Pressable
        onPress={() => {
          navigate("League");
        }}
      >
        <Text>go to league screen</Text>
      </Pressable>
      <Text>LeagueListScreen</Text>
    </View>
  );
};

export default LeagueListScreen;
