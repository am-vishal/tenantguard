const ContactSection = () => {
    return (
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
    );
};

export default ContactSection;
