import { useRouter } from "next/router";
import { FiHome } from "react-icons/fi";

export default function Header() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("auth");
    router.push("/login");
  };

  return (
    <header className="w-full flex justify-between items-center px-8 py-4 bg-[#001F3F] rounded-b-2xl shadow-md mb-8">
      <div
        className="flex items-center gap-2 cursor-pointer select-none"
        onClick={() => router.push("/")}
      >
        <FiHome className="text-[#B8860B] text-2xl" />
        <span className="text-xl font-bold text-white tracking-wide">
          Home Rentals
        </span>
      </div>
      <button
        className="bg-[#144f95] hover:bg-[#CD7F32] transition-colors text-white font-semibold px-5 py-2 rounded-lg shadow"
        onClick={logout}
      >
        Cerrar sesión
      </button>
    </header>
  );
}
