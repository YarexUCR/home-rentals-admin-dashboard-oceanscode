import { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import PropertyList from "../components/PropertyList";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Si no hay "auth" en localStorage, redirige al login
    if (typeof window !== "undefined" && !localStorage.getItem("auth")) {
      router.replace("/login");
    }
  }, []);
  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl text-[#001F3F] font-bold mb-10 text-center drop-shadow-lg">
          Propiedades en alquiler
        </h1>
        <PropertyList />
      </div>
    </>
  );
}

