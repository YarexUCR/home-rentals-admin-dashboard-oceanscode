import { useState } from "react";
import { useRouter } from "next/router";
import { FiUser, FiLock } from "react-icons/fi";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "test@oceans.com" && password === "admin123") {
      localStorage.setItem("auth", "true");
      router.push("/");
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm mx-auto bg-white border border-[#E0E0E0] rounded-2xl shadow-2xl px-8 py-10 flex flex-col gap-6"
    >
      <h2 className="text-2xl text-[#001F3F] font-bold text-center mb-1 tracking-tight">
        Iniciar sesión
      </h2>

      <div className="flex items-center border border-[#E0E0E0] rounded-lg px-3 bg-[#FDF5E6] focus-within:ring-2 focus-within:ring-[#001F3F]">
        <FiUser className="text-[#708090] text-lg" />
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full px-3 py-3 bg-transparent border-none outline-none text-gray-900 font-medium"
          required
        />
      </div>
      <div className="flex items-center border border-[#E0E0E0] rounded-lg px-3 bg-[#FDF5E6] focus-within:ring-2 focus-within:ring-[#001F3F]">
        <FiLock className="text-[#708090] text-lg" />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full px-3 py-3 bg-transparent border-none outline-none text-gray-900 font-medium"
          required
        />
      </div>
      {error && (
        <p className="text-red-500 text-center font-semibold text-sm mt-1">
          {error}
        </p>
      )}
      <button
        type="submit"
        className="mt-2 bg-[#001F3F] hover:bg-[#274472] transition-colors text-white font-bold py-3 rounded-xl shadow-lg text-lg tracking-wide"
      >
        Ingresar
      </button>
    </form>
  );
}
