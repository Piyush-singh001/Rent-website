import { FaMapMarkerAlt, FaWhatsapp} from "react-icons/fa";
import RoomImageGallery from "../components/RoomImageGallary";

const RoomDetail = () => {


  const images = [
  "../images/home2.jpg",
  "../images/home1.jpg",
  "../images/home2.jpg",
  "../images/home3.jpg",
  "../images/home1.jpg",
  "../images/home3.jpg",
  "../images/home2.jpg",
];

  return (
    <section className="px-4 mt-20 md:px-10 py-10 max-w-7xl mx-auto">
      
      {/* Image Gallery */}
      <div className="mb-8">
        <RoomImageGallery images={images}/>
      </div>

      {/* Title + Price */}
      <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">
            2 BHK Flat for Rent
          </h1>
          <p className="flex items-center gap-2 text-gray-600 mt-1">
            <FaMapMarkerAlt /> Indirapuram, Ghaziabad
          </p>
        </div>

        <div className="text-[#346fb3] text-2xl font-bold">
          ₹18,000 / month
        </div>
      </div>

      {/* Quick Info */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <InfoBox label="Type" value="2 BHK" />
        <InfoBox label="Area" value="950 sq.ft" />
        <InfoBox label="Furnishing" value="Semi-furnished" />
        <InfoBox label="Floor" value="3rd Floor" />
      </div>

      {/* Description */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-gray-600 leading-relaxed">
          Spacious 2 BHK flat available for rent in a prime location of
          Indirapuram. Near market, metro, and schools. Suitable for families
          and working professionals.
        </p>
      </div>

      {/* Amenities */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Amenities</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-700">
          <li>✔ Parking</li>
          <li>✔ Power Backup</li>
          <li>✔ Lift</li>
          <li>✔ 24x7 Water</li>
          <li>✔ Security</li>
        </ul>
      </div>

      {/* Contact CTA */}
      <div className="fixed bottom-4 left-4 md:static flex gap-3">
        <button className="bg-green-500 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg"  
        onClick={() =>
          window.open(
              "https://wa.me/8510992504?text=Hi, I am interested in this room.",
              "_blank"
              )
          }>
          <FaWhatsapp className="text-xl" />
          WhatsApp
        </button>

        <button className="bg-[#346fb3] text-white px-6 py-3 rounded-full shadow-lg">
          Call Owner
        </button>
      </div>

    </section>
  );
};

export default RoomDetail;

/* Small reusable component */
const InfoBox = ({ label, value }) => (
  <div className="border rounded-lg p-3 text-center">
    <p className="text-sm text-gray-400">{label}</p>
    <p className="font-semibold">{value}</p>
  </div>
);
