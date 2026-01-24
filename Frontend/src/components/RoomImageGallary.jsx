import { useState } from "react";
import ImageModal from "./ImageModal";

const RoomImageGallery = ({ images }) => {
  const [open, setOpen] = useState(false);

  if (!images || images.length === 0) return null;


  return (
    <>
      {/* Preview Grid */}
      <div className="grid grid-cols-4  md:h-[70vh] grid-rows-2 gap-2 rounded-2xl overflow-hidden">

        {/* Big image */}
        <div className="col-span-2 row-span-2">
          <img
            src={images[0]}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* Small images */}
        {images.slice(1, 5).map((img, index) => (
          <div key={index} className="relative">
            <img
              src={img}
              alt=""
              className="h-full w-full object-cover"
            />

            {/* Last image overlay */}
            {index === 3 && (
              <button
                onClick={() => setOpen(true)}
                className="absolute inset-0 bg-black/50 text-white text-lg font-semibold flex items-center justify-center"
              >
                + {images.length - 5} more
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Full gallery modal */}
      {open && <ImageModal images={images} onClose={() => setOpen(false)} />}
    </>
  );
};

export default RoomImageGallery;
