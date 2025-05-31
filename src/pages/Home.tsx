const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col">

      {/* Hero Section */}
      <header className="flex flex-col items-center text-center px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          Your Trusted PG & Apartment Rental Partner
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          TenantGuard makes renting easy, safe, and reliable — with tenant verification, ratings, and transparent property listings.
        </p>
        <div className="flex gap-4 flex-col sm:flex-row">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition">
            Get Started
          </button>
          <button className="border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 font-semibold py-2 px-6 rounded-full transition">
            Learn More
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="bg-white px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature Cards */}
          <div className="bg-blue-50 rounded-3xl p-6 shadow hover:shadow-lg transition text-center">
            <div className="text-5xl mb-4">🏢</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Property Listings</h3>
            <p className="text-gray-600">
              Browse verified PGs and apartments with accurate descriptions and photos.
            </p>
          </div>
          <div className="bg-green-50 rounded-3xl p-6 shadow hover:shadow-lg transition text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Tenant Verification</h3>
            <p className="text-gray-600">
              Ensure trustworthy tenants with thorough background checks and KYC validation.
            </p>
          </div>
          <div className="bg-purple-50 rounded-3xl p-6 shadow hover:shadow-lg transition text-center">
            <div className="text-5xl mb-4">⭐</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Tenant Ratings</h3>
            <p className="text-gray-600">
              Rate and review tenants and landlords to build a transparent renting community.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          How It Works
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-2">🔍</div>
            <h4 className="text-lg font-semibold mb-1">Search Properties</h4>
            <p className="text-gray-600">Use filters to explore PGs and apartments in your city.</p>
          </div>
          <div>
            <div className="text-4xl mb-2">📝</div>
            <h4 className="text-lg font-semibold mb-1">Apply Online</h4>
            <p className="text-gray-600">Submit your rental application and documents with ease.</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🔐</div>
            <h4 className="text-lg font-semibold mb-1">Move In Securely</h4>
            <p className="text-gray-600">Enjoy verified rentals and peaceful living with TenantGuard.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Why Choose TenantGuard?
        </h2>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
          <div className="bg-blue-100 p-6 rounded-2xl shadow">
            <h4 className="font-semibold text-lg mb-2">Verified Listings Only</h4>
            <p className="text-gray-700">We thoroughly vet every listing before it goes live.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-2xl shadow">
            <h4 className="font-semibold text-lg mb-2">24/7 Support</h4>
            <p className="text-gray-700">Our support team is always available to help you.</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-2xl shadow">
            <h4 className="font-semibold text-lg mb-2">Affordable Options</h4>
            <p className="text-gray-700">We offer rentals to fit every budget and need.</p>
          </div>
          <div className="bg-pink-100 p-6 rounded-2xl shadow">
            <h4 className="font-semibold text-lg mb-2">Transparent Reviews</h4>
            <p className="text-gray-700">Honest feedback from past tenants and landlords.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white text-center px-6 py-16">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Renting Smarter?</h2>
        <p className="mb-8 max-w-xl mx-auto">
          Join TenantGuard today and discover a simpler, safer, and more transparent way to rent.
        </p>
        <button className="bg-white text-blue-600 hover:bg-blue-100 font-semibold py-2 px-6 rounded-full transition">
          Sign Up Now
        </button>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-50 px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
          Get in Touch
        </h2>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-gray-700 mb-6">
            Have questions or need support? We're here to help.
          </p>
          <a
            href="mailto:support@TenantGuard.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition"
          >
            Email Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
