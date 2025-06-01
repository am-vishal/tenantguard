const Contact = () => {
    return (
        <div className="max-w-xl mx-auto p-6 text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
                We'd love to hear from you! Reach out with your questions or feedback.
            </p>
            <a
                href="mailto:support@rentcheck.com"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition"
            >
                Email Support
            </a>
        </div>
    );
};

export default Contact;
