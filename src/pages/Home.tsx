import { Building, Users, ShieldCheck } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center p-6 bg-white shadow-md">
        <div className="text-2xl font-bold text-blue-700">RentEase</div>
        <div className="flex gap-8">
          <a href="#" className="text-blue-700 hover:text-blue-900 font-medium">Home</a>
          <a href="#" className="text-blue-700 hover:text-blue-900 font-medium">About</a>
          <a href="#" className="text-blue-700 hover:text-blue-900 font-medium">Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow p-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-800 mb-4">
            Welcome to <span className="text-primary">RentEase</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Simplify your rental property management experience with easy tools and trustworthy services.
          </p>
          <div className="flex gap-6 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition">
              Login
            </button>
            <button className="border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 font-semibold py-2 px-6 rounded-full transition">
              Register
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition">
            <Building className="h-14 w-14 text-blue-600 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Property Management
            </h3>
            <p className="text-gray-600">
              Easily manage your properties, units, leases, and rental payments.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition">
            <Users className="h-14 w-14 text-green-600 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Tenant Management
            </h3>
            <p className="text-gray-600">
              Keep track of tenant information, communication, and support.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition">
            <ShieldCheck className="h-14 w-14 text-purple-600 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Tenant Verification
            </h3>
            <p className="text-gray-600">
              Verify tenant backgrounds to ensure safe and reliable occupancy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
