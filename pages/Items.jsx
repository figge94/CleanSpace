import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";
import { fetchItems, createItem, updateItem, deleteItem } from "../data/api";

export default function ItemsScreen() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    fetchItems().then(setItems);
  }, []);

  const handleAddItem = () => {
    if (newItem.trim()) {
      createItem({ name: newItem }).then((item) => {
        setItems([...items, item]);
        setNewItem("");
      });
    }
  };

  const handleEditItem = (id, name) => {
    setEditingId(id);
    setEditingText(name);
  };

  const handleSaveEdit = () => {
    updateItem(editingId, { name: editingText }).then((updatedItem) => {
      setItems(
        items.map((item) => (item._id === editingId ? updatedItem : item))
      );
      setEditingId(null);
    });
  };

  const handleDeleteItem = (id) => {
    deleteItem(id).then(() => {
      setItems(items.filter((item) => item._id !== id));
    });
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Lägg till nytt objekt"
        value={newItem}
        onChangeText={setNewItem}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Lägg till" onPress={handleAddItem} />

      <FlatList
        data={items}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            {editingId === item._id ? (
              <>
                <TextInput value={editingText} onChangeText={setEditingText} />
                <Button title="Spara" onPress={handleSaveEdit} />
              </>
            ) : (
              <>
                <Text>{item.name}</Text>
                <TouchableOpacity
                  onPress={() => handleEditItem(item._id, item.name)}>
                  <Text style={{ color: "blue" }}>Redigera</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDeleteItem(item._id)}>
                  <Text style={{ color: "red" }}>Ta bort</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        )}
      />
    </View>
  );
}
