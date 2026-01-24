import { Link } from "react-router-dom";

const Card = ({ title, price, img, id }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <img src={img} alt={title} className="h-48 w-full object-cover" />

      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mt-1">{price}</p>

        <div className="flex justify-between">
          <Link
            to={`/room/${id}`}
            className="mt-4 px-[12%] bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer"
          >
            Details
          </Link>

          <button
            className="mt-4 px-[12%] bg-green-600 text-white py-2 rounded-lg hover:bg-green-800 transition cursor-pointer"
            onClick={() =>
              window.open(
                "https://wa.me/8510992504?text=Hi, I am interested in this room.",
                "_blank",
              )
            }
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
