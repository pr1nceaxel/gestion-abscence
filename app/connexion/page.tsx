"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaLock } from "react-icons/fa";
import { useRouter } from "next/navigation"; // 👉 à ajouter en haut

export default function ConnexionPage() {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [estConnecte, setEstConnecte] = useState(false);
  const [erreur, setErreur] = useState("");
  const router = useRouter(); // 👉 ici

  const handleConnexion = async () => {
    try {
      const res = await fetch("/api/connexion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, mot_de_passe: motDePasse }),
      });

      const data = await res.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.utilisateur));
      router.push("/acceuil");
      
    } catch (err: any) {
      setErreur(err.message);
    }
  };

  

  const handleDeconnexion = () => {
    setEstConnecte(false);
    setEmail("");
    setMotDePasse("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center p-4">
      <motion.div
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {estConnecte ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Bienvenue ! 🎉</h2>
            <p className="text-gray-600 mb-6">Vous êtes connecté avec succès.</p>
            <button
              onClick={handleDeconnexion}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full transition duration-300"
            >
              Se déconnecter
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Connexion</h2>
            {erreur && <p className="text-red-500 mb-4 text-center">{erreur}</p>}
            <div className="space-y-4">
              <div className="flex items-center border rounded-lg px-3 py-2">
                <FaUser className="text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full outline-none"
                />
              </div>
              <div className="flex items-center border rounded-lg px-3 py-2">
                <FaLock className="text-gray-400 mr-2" />
                <input
                  type="password"
                  placeholder="Mot de passe"
                  value={motDePasse}
                  onChange={(e) => setMotDePasse(e.target.value)}
                  className="w-full outline-none"
                />
              </div>
              <button
                onClick={handleConnexion}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full font-semibold transition duration-300"
              >
                Se connecter
              </button>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}
