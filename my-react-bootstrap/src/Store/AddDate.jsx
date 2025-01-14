function AddDate() {
  return (
    <>
      <div className="h-[100vh] w-[50%] p-36">
        {/* Form Section */}
        <h2 className="text-2xl font-bold mb-6">Add New Drink</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium">ID</label>
            <input
              type="text"
              name="id"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="Enter ID"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="Enter Name"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Price</label>
            <input
              type="text"
              name="price"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="Enter Price"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Add Drink
          </button>
        </form>
      </div>
      <div>
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Name
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
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">Product A</td>
              <td className="border border-gray-300 px-4 py-2">$10</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">2</td>
              <td className="border border-gray-300 px-4 py-2">Product B</td>
              <td className="border border-gray-300 px-4 py-2">$20</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">Product C</td>
              <td className="border border-gray-300 px-4 py-2">$30</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AddDate;
