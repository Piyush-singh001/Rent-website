import { useEffect } from "react";

const ImageModal = ({ images, onClose }) => {

  // 🔒 Scroll lock
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed mt-20 inset-0 bg-black/80 z-40 flex flex-col">

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-6 text-white text-2xl z-40"
      >
        ✕
      </button>

      {/* Images */}
      <div className="mt-16 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className="w-full h-60 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageModal;
