"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

// Import dynamique des composants
const FormSalles = dynamic(() => import("../salles/page"));
const FormFilieres = dynamic(() => import("../filieres/page"));
const FormCreneaux = dynamic(() => import("../creneaux/page"));
const FormEnseignements = dynamic(() => import("../salles/page")); 
const FormConnexion = dynamic(() => import("../connexion/page"));

export default function AcceuilPage() {
  const [activeSection, setActiveSection] = useState("");
  const [user, setUser] = useState<{nom?: string; email?: string}>({});
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
  
    if (!token || !userData) {
      router.push("/connexion");
      return;
    }
  
    setUser(JSON.parse(userData));
  }, []);
  

  const deconnexion = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
    router.push("/connexion");
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case "salles":
        return <FormSalles />;
      case "filieres":
        return <FormFilieres />;
      case "creneaux":
        return <FormCreneaux />;
      case "enseignements":
        return <FormEnseignements />;
      default:
        return (
          <div className="flex flex-col items-center justify-center text-center mt-20 animate-fade-in">
            <h1 className="text-3xl font-bold text-blue-800 mb-2">
              Bienvenue sur le système de gestion des absences.
            </h1>
            <p className="text-gray-600 text-lg max-w-xl">
              Sélectionnez une section dans le menu ci-dessus pour commencer à gérer vos données.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white text-gray-800">
      <header className="flex fixed top-0 left-0 right-0 z-50 justify-between items-center p-4 bg-white shadow-md">
        <div className="flex items-center gap-4">
          <Image 
            src="/img/esatic.png" 
            alt="Logo" 
            width={60} 
            height={60} 
            className="rounded-full" 
            priority
          />
          <div>
            <p className="text-sm font-semibold text-gray-700">
              Bienvenue, {user?.nom || "votre nom saffiche ici"} 
            </p>
            <p className="text-xs text-gray-500">{user?.email || ""}</p>
          </div>
        </div>
        <nav className="flex gap-4">
          <button 
            onClick={() => setActiveSection("salles")} 
            className="px-4 py-2 rounded-md text-sm font-semibold text-blue-700 hover:bg-blue-100 hover:scale-105 transition-transform duration-200"
          >
            Salles
          </button>
          <button 
            onClick={() => setActiveSection("filieres")} 
            className="px-4 py-2 rounded-md text-sm font-semibold text-blue-700 hover:bg-blue-100 hover:scale-105 transition-transform duration-200"
          >
            Filières
          </button>
          <button 
            onClick={() => setActiveSection("creneaux")} 
            className="px-4 py-2 rounded-md text-sm font-semibold text-blue-700 hover:bg-blue-100 hover:scale-105 transition-transform duration-200"
          >
            Créneaux
          </button>
          <button 
            onClick={() => setActiveSection("enseignements")} 
            className="px-4 py-2 rounded-md text-sm font-semibold text-blue-700 hover:bg-blue-100 hover:scale-105 transition-transform duration-200"
          >
            Enseignement
          </button>
          <button 
            onClick={deconnexion} 
            className="px-4 py-2 rounded-md text-sm font-semibold text-red-600 hover:bg-red-100 hover:scale-105 transition-transform duration-200"
          >
            Déconnexion
          </button>
        </nav>
      </header>

      <main className="pt-24 p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection || "default"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderSectionContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}