import { useState } from "react";
import { restaurantsStats } from "../../helper";
import { FaEdit, FaTrash } from "react-icons/fa";
import RestaurantRecoredModal from "../../components/restaurant/RestaurantRecoredModal";

const RestaurantRecord = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [data, setData] = useState(restaurantsStats);

  const openModal = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRestaurant(null);
    setIsModalOpen(false);
  };

  const openDeleteModal = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedRestaurant(null);
    setIsDeleteModalOpen(false);
  };

  const handleDelete = () => {
    setData(data.filter((item) => item.id !== selectedRestaurant.id));
    closeDeleteModal();
  };

  return (
    <div className="font-poppins">
      <table className="min-w-full bg-white border rounded-lg mt-5">
        <thead>
          <tr className="bg-white text-left">
            <th className="px-4 py-2 text-gray-600 font-semibold border-l">Name English</th>
            <th className="px-4 py-2 text-gray-600 font-semibold border-l">Owner</th>
            <th className="px-4 py-2 text-gray-600 font-semibold border-l">Phone</th>
            <th className="px-4 py-2 text-gray-600 font-semibold border-l">Status</th>
            <th className="px-4 py-2 text-gray-600 font-semibold border-l">Logo</th>
            <th className="px-4 py-2 text-gray-600 font-semibold border-l">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((restaurant, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2 border-l text-gray-600">{restaurant.name}</td>
              <td className="px-4 py-2 border-l text-gray-600">{restaurant.owner}</td>
              <td className="px-4 py-2 border-l text-gray-600">{restaurant.phone}</td>
              <td className="px-4 py-2 border-l text-gray-600">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {restaurant.status}
                </span>
              </td>
              <td className="px-4 py-2 border-l">
                
                {/* <img
                  src={restaurant.logo}
                  alt={`${restaurant.name} logo`}
                  className="h-10 w-10 rounded-full object-cover"
                /> */}
              </td>
              <td className="px-4 py-2 border-l flex space-x-4">
                <button
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Edit"
                  onClick={() => openModal(restaurant)}
                >
                  <FaEdit size={17} />
                </button>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Delete"
                  onClick={() => openDeleteModal(restaurant)}
                >
                  <FaTrash size={17} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     
      {isModalOpen && (
        <RestaurantRecoredModal closeModal={closeModal} data={selectedRestaurant} />
      )}

      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-700">Confirm Deletion</h3>
            <p className="mt-4  text-gray-700">Are you sure you want to delete this record?</p>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                className="px-4 py-2 bg-gray-300 rounded-lg"
                onClick={closeDeleteModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-800 text-white rounded-lg"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantRecord;
