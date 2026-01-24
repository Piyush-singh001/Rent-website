import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <div className="fixed right-4 bottom-4 z-50">
      <button className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center shadow-xl cursor-pointer"   onClick={() =>
    window.open(
      "https://wa.me/8510992504?text=Hi, I am interested in this room.",
      "_blank"
    )
  }>
        <FaWhatsapp className="text-white text-3xl" />
      </button>
    </div>
  );
};

export default WhatsAppButton;