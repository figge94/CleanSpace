import { Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // ✅ Importera ikon

export default function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detaljer</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 5,
          marginTop: 20
        }}>
        <MaterialIcons name="arrow-back" size={20} color="white" />
        <Text style={{ color: "white", marginLeft: 5 }}>Gå tillbaka</Text>
      </TouchableOpacity>
    </View>
  );
}
