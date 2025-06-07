interface PopupProps {
    message: string;
}

const Popup = ({ message }: PopupProps) => {
    return (
        <div className="fixed top-6 right-6 bg-gray-800 text-white text-sm px-4 py-3 rounded shadow-lg z-50 animate-fade-in">
            {message}
        </div>
    );
};

export default Popup;