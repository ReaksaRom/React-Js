import { useState, useEffect } from "react";
import axios from "axios";

function Crud() {
  const [drinksArr, setDrinksArr] = useState([]);
  const [formData, setFormData] = useState({ id: "", item: "", price: "" });
  const [editId, setEditId] = useState(null);

  // Fetch drinks from API on component mount
  useEffect(() => {
    fetchDrinks();
  }, []);

  const fetchDrinks = async () => {
    try {
      const response = await axios.get(
        "https://drink-json.onrender.com/drinks"
      ); // Replace with your API URL
      setDrinksArr(response.data);
    } catch (error) {
      console.error("Error fetching drinks:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        // Update an existing drink
        await axios.put(
          `https://drink-json.onrender.com/drinks/${editId}`,
          formData
        );
        setEditId(null);
      } else {
        // Add a new drink
        await axios.post("https://drink-json.onrender.com/drinks", formData);
      }
      setFormData({ id: "", item: "", price: "" });
      fetchDrinks();
    } catch (error) {
      console.error("Error saving drink:", error);
    }
  };

  const handleEdit = (drink) => {
    setFormData(drink);
    setEditId(drink.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://drink-json.onrender.com/drinks/${id}`);
      fetchDrinks();
    } catch (error) {
      console.error("Error deleting drink:", error);
    }
  };

  return (
    <div className="flex h-screen p-10">
      {/* Form Section */}
      <div className="w-1/2 p-6">
        <h2 className="text-2xl font-bold mb-6">
          {editId ? "Edit Drink" : "Add New Drink"}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-sm font-medium">ID</label>
            <input
              type="text"
              name="id"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="Enter ID"
              value={formData.id}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Item</label>
            <input
              type="text"
              name="item"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="Enter Item"
              value={formData.item}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Price</label>
            <input
              type="text"
              name="price"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="Enter Price"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            {editId ? "Update Drink" : "Add Drink"}
          </button>
        </form>
      </div>

      {/* Table Section */}
      <div className="w-1/2">
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Item
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Price
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {drinksArr.map((drink) => (
              <tr key={drink.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{drink.id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {drink.item}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {drink.price}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2"
                    onClick={() => handleEdit(drink)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    onClick={() => handleDelete(drink.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Crud;
