import { Button, Text, View } from "react-native";

export default function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Om sidan</Text>
      <Button title="Gå tillbaka" onPress={() => navigation.goBack()} />
    </View>
  );
}
