import Link from "next/link";
import properties from "../data/properties.json";
import { FiMapPin, FiArrowRight } from "react-icons/fi";

export default function PropertyList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2">
      {properties.map(prop => (
        <div
          key={prop.id}
          className="bg-white border border-[#E0E0E0] rounded-2xl shadow-xl flex flex-col overflow-hidden hover:shadow-2xl transition-shadow duration-200"
        >
          {/* Imagen */}
          <img
            src={prop.image}
            alt={prop.name}
            className="w-full h-52 object-cover"
            style={{ filter: "brightness(97%)" }}
          />

          {/* Detalles */}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-[#001F3F] text-2xl font-semibold mb-1">{prop.name}</h3>
            <div className="flex items-center gap-2 mb-2">
              <FiMapPin className="text-[#B8860B]" />
              <span className="text-[#708090] text-sm">{prop.address}</span>
            </div>
            <p className="text-[#708090] mb-4 line-clamp-2">{prop.description}</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-[#B8860B] text-lg font-bold">${prop.price}
                <span className="text-xs font-medium text-[#708090] ml-1">/noche</span>
              </span>
              <Link href={`/properties/${prop.id}`}>
                <button className="flex items-center gap-2 bg-[#001F3F] hover:bg-[#274472] transition text-white font-semibold px-4 py-2 rounded-lg shadow">
                  Ver detalles <FiArrowRight className="text-white" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
