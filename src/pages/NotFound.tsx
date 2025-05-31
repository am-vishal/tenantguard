import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="text-center p-10">
            <h1 className="text-5xl font-bold text-blue-800 mb-4">404</h1>
            <p className="text-gray-600 mb-6">Page not found</p>
            <Link
                to="/"
                className="text-blue-600 hover:text-blue-800 underline"
            >
                Go to Home
            </Link>
        </div>
    );
};

export default NotFound;
