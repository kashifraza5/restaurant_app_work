import { useState } from "react";
import RestaurantRecord from "../../components/restaurant/RestaurantRecord";
import { FaPlus } from "react-icons/fa6";
import RestaurantRecoredModal from "../../components/restaurant/RestaurantRecoredModal";

const RestaurantSetup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-4 bg-white font-poppins">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4 text-slate-700">Restaurant Setup</h1>
        <div
          className="flex justify-center items-center rounded-full bg-blue-900 px-2 w-12 cursor-pointer"
          onClick={openModal}
        >
          <FaPlus className="text-white w-[18px] h-[18px]" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <RestaurantRecord />
      </div>

      {/* Modal */}
      {isModalOpen && (
          <RestaurantRecoredModal closeModal={closeModal}/>
      )}
    </div>
  );
};

export default RestaurantSetup;
