const Header = ({ handleClick }: { handleClick: () => void; onBack: () => void }) => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-200 p-3">
            <div className="flex items-center justify-between">
                {/* Left section: Back button and brand */}
                <div className="flex items-center gap-6">
                    {/* Back Button */}
                    {/* <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                    >
                        <FaArrowLeft size={18} />
                    </button> */}

                    {/* Brand Name */}
                    <h1
                        className="text-xl font-extrabold text-blue-700 cursor-pointer tracking-tight"
                        onClick={handleClick}
                    >
                        Tenant<span className="text-purple-600">Guard</span>
                    </h1>
                </div>

                {/* Right section: Page Title */}
                <h2 className="text-l md:text-l font-extrabold text-gray-800 tracking-wide">
                    Admin <span className="text-blue-600">• Dashboard</span>
                </h2>
            </div>
        </header>
    );
};

export default Header;
