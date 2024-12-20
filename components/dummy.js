const RestaurantRecoredModal = ({ closeModal }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
      
        <div className="relative w-full max-w-[800px] max-h-full h-[90vh] bg-white rounded-lg shadow-lg overflow-hidden">
        
          <div className="sticky top-0 bg-white z-10 border-b border-gray-200 px-6 py-4">
            <h2 className="text-2xl font-bold text-blue-900">Add New Record</h2>
          </div>
  
       
          <div className="px-6 py-6 h-[calc(100%-96px)] overflow-y-auto"> 
            <form className="space-y-4">
            
              <div>
                <label className="block text-gray-700 mb-2">Name (English)</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none "
                  placeholder="Enter name"
                />
              </div>
  
           
              <div className="grid grid-cols-2 gap-4 ">
                <div>
                  <label className="block text-gray-700 mb-2">Sales Man Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none "
                    placeholder="Sales Man Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Owner Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none"
                    placeholder="Owner Name"
                  />
                </div>
              </div>
  
           
              <div>
                <label className="block text-gray-700 mb-2">Slug *</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none "
                  placeholder="Slug"
                />
              </div>
  
             
              <div className="grid grid-cols-2 gap-4 pb-8">
                <div>
                  <label className="block text-gray-700 mb-2">Countries</label>
                  <select className="w-full border rounded p-2 focus:outline-none bg-white">
                    <option>-- SELECT COUNTRY --</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Store</label>
                  <select className="w-full border rounded p-2 focus:outline-none bg-white">
                    <option className="text-gray-700">-- SELECT STORE --</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">City</label>
                  <select className="w-full border rounded p-2 focus:outline-none bg-white">
                    <option className="text-gray-700">-- SELECT CITY --</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Area</label>
                  <select className="w-full border rounded p-2 focus:outline-none bg-white">
                    <option className="text-gray-700 ">-- SELECT AREA --</option>
                  </select>
                </div>

                
              </div>

              <div className="flex space-x-4">
                <div className="space-x-3">
                <label htmlFor="">Active</label>
                <input type="checkbox"  className=""/>
                </div>

                <div className="space-x-3">
                <label htmlFor="">InActive</label>
                <input type="checkbox" />
                </div>

              </div>

              <div className="flex">

                <div className="">

                </div>

              </div>
            </form>
          </div>
  
          {/* Modal Footer */}
          <div className="sticky bottom-0 bg-white z-10 border-t border-gray-200 px-6 py-4 flex justify-end space-x-4">
            <button
              onClick={closeModal}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              onClick={closeModal}
              className="bg-blue-900 text-white px-4 py-2 rounded "
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default RestaurantRecoredModal;
  