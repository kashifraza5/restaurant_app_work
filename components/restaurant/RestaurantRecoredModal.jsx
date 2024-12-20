import { useEffect } from 'react';
import { useFormik } from 'formik';
const RestaurantRecoredModal = ({ closeModal,data }) => {
  const handleApiCall = (values) => {
    console.log('Form data:', values);
  };

 

  const formik = useFormik({
    initialValues: {
      name: '',
      salesManName: '',
      ownerName: '',
      slug: '',
      countries: '',
      store: '',
      city: '',
      area: '',
      isActive: false,
      isInactive: false,
      restaurantLogo: null,
      restaurantBanner: null,
      menuPageBanner: null,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      handleApiCall(values);
      closeModal();
    },
  });


  useEffect(() => {
    if (data) {
      formik.setValues({
        name: data.name || '',
        salesManName: data.salesManName || '',
        ownerName: data.ownerName || '',
        slug: data.slug || '',
        countries: data.countries || '',
        store: data.store || '',
        city: data.city || '',
        area: data.area || '',
        isActive: data.isActive || false,
        isInactive: data.isInactive || false,
        restaurantLogo: data.restaurantLogo || null,
        restaurantBanner: data.restaurantBanner || null,
        menuPageBanner: data.menuPageBanner || null,
      });
      console.log('Updated formik values:', formik.values);
    }
  }, [data]); 

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center" onClick={handleOverlayClick}>
      <div className="relative w-full max-w-[800px] max-h-full h-[90vh] bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="sticky top-0 bg-white z-10 border-b border-gray-200 px-6 py-4">
          <h2 className="text-2xl font-bold text-blue-900">Add New Record</h2>
        </div>

        <div className="h-[calc(100%-144px)] overflow-y-auto px-6 py-4">
          <form className="space-y-4" onSubmit={formik.handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-2">Name </label>
              <input
                type="text"
                name="name"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none"
                placeholder="Enter name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Sales Man Name</label>
                <input
                  type="text"
                  name="salesManName"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none"
                  placeholder="Sales Man Name"
                  onChange={formik.handleChange}
                  value={formik.values.salesManName}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Owner Name</label>
                <input
                  type="text"
                  name="ownerName"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none"
                  placeholder="Owner Name"
                  onChange={formik.handleChange}
                  value={formik.values.ownerName}
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Slug *</label>
              <input
                type="text"
                name="slug"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none"
                placeholder="Slug"
                onChange={formik.handleChange}
                value={formik.values.slug}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Countries</label>
                <select
                  name="countries"
                  className="w-full border rounded p-2 focus:outline-none bg-white"
                  onChange={formik.handleChange}
                  value={formik.values.countries}
                >
                  <option className="text-gray-700">-- SELECT COUNTRY --</option>
                  
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Store</label>
                <select
                  name="store"
                  className="w-full border rounded p-2 focus:outline-none bg-white"
                  onChange={formik.handleChange}
                  value={formik.values.store}
                >
                  <option className="text-gray-700">-- SELECT STORE --</option>
                 
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">City</label>
                <select
                  name="city"
                  className="w-full border rounded p-2 focus:outline-none bg-white"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                >
                  <option className="text-gray-700">-- SELECT CITY --</option>
                 
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Area</label>
                <select
                  name="area"
                  className="w-full border rounded p-2 focus:outline-none bg-white"
                  onChange={formik.handleChange}
                  value={formik.values.area}
                >
                  <option className="text-gray-700">-- SELECT AREA --</option>
                
                </select>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="space-x-3">
                <label htmlFor="" className="text-gray-700 text-lg">Active</label>
                <input
                  type="checkbox"
                  name="isActive"
                  className="w-[14px] h-[14px]"
                  onChange={formik.handleChange}
                  checked={formik.values.isActive}
                />
              </div>

              <div className="space-x-3">
                <label htmlFor="" className="text-gray-700 text-lg">Inactive</label>
                <input
                  type="checkbox"
                  name="isInactive"
                  className="w-[14px] h-[14px]"
                  onChange={formik.handleChange}
                  checked={formik.values.isInactive}
                />
              </div>
            </div>

            <div className="flex gap-5">
              <div className="border border-gray-300 w-full p-2 ">
                <h1 className="text-gray-700 font-bold text-lg">Restaurant Logo</h1>
                <p className="text-gray-700 text-base">You can make max file size 2MB</p>
                <div className="flex justify-center items-center border border-gray-300 w-full mt-2 py-4 h-[150px]">
                  <input
                    type="file"
                    name="restaurantLogo"
                    id="uploadLogo"
                    hidden
                    onChange={(e) => formik.setFieldValue('restaurantLogo', e.target.files[0])}
                  />
                  <label htmlFor="uploadLogo" className="uploadlabel1">
                    <span className="text-gray-200 text-center"><i className="fa fa-cloud-upload "></i></span>
                  </label>
                </div>
              </div>

              <div className="border border-gray-300 w-full p-2 ">
                <h1 className="text-gray-700 font-bold text-lg">Restaurant Banner</h1>
                <p className="text-gray-700 text-base">You can make max file size 2MB</p>
                <div className="flex justify-center items-center border border-gray-300 w-full mt-2 py-4 h-[150px]">
                  <input
                    type="file"
                    name="restaurantBanner"
                    id="uploadBanner"
                    hidden
                    onChange={(e) => formik.setFieldValue('restaurantBanner', e.target.files[0])}
                  />
                  <label htmlFor="uploadBanner" className="uploadlabel1">
                    <span className="text-gray-200 text-center"><i className="fa fa-cloud-upload "></i></span>
                  </label>
                </div>
              </div>
            </div>

            <div className="border border-gray-300 w-full p-2 ">
              <h1 className="text-gray-700 font-bold text-lg">Restaurant Menu Page Banner</h1>
              <p className="text-gray-700 text-base">You can make max file size 2MB</p>
              <div className="flex justify-center items-center border border-gray-300 w-full mt-2 py-4 h-[150px]">
                <input
                  type="file"
                  name="menuPageBanner"
                  id="uploadMenuPage"
                  hidden
                  onChange={(e) => formik.setFieldValue('menuPageBanner', e.target.files[0])}
                />
                <label htmlFor="uploadMenuPage" className="uploadlabel1">
                  <span className="text-gray-200 text-center"><i className="fa fa-cloud-upload "></i></span>
                </label>
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-900 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RestaurantRecoredModal;
