
const SignIn = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Sign In</h2>
        <form>
         
          <div className="mb-4">
            <input
              type="email"
              placeholder="admin@mail.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#05437A]"
            />
          </div>

       
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#05437A]"
            />
          </div>

        
          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-sm text-[#05437A] hover:underline">
              Forgot pwd?
            </a>
          </div>

       
          <button
            type="submit"
            className="w-full bg-[#05437A] text-white py-2 rounded-md  transition duration-200"
          >
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
