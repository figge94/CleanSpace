const API_URL = "https://mitt-api.findersson.se/items";

export const fetchItems = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createItem = async (item) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item)
  });
  return res.json();
};

export const updateItem = async (id, updatedData) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData)
  });
  return res.json();
};

export const deleteItem = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
