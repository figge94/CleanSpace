import { Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TipsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tips</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "black",
          padding: 10,
          borderRadius: 5,
          marginTop: 20
        }}>
        <Text style={{ color: "white", marginLeft: 5 }}>Gå tillbaka</Text>
      </TouchableOpacity>
    </View>
  );
}
