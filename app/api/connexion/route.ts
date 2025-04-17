import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "secret_dev_temporaire"; // Mets une vraie clé secrète en prod

export async function POST(req: Request) {
  try {
    const { email, mot_de_passe } = await req.json();

    if (!email || !mot_de_passe) {
      return NextResponse.json(
        { erreur: "Email et mot de passe requis." },
        { status: 400 }
      );
    }

    const utilisateur = await prisma.utilisateurs.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        mot_de_passe: true,
        nom: true,
        role: true,
      },
    });

    if (!utilisateur) {
      return NextResponse.json(
        { erreur: "Email ou mot de passe incorrect." },
        { status: 401 }
      );
    }

    const motDePasseValide = await bcrypt.compare(
      mot_de_passe,
      utilisateur.mot_de_passe
    );

    if (!motDePasseValide) {
      return NextResponse.json(
        { erreur: "Email ou mot de passe incorrect." },
        { status: 401 }
      );
    }

    // Génération du token JWT
    const token = jwt.sign(
      { id: utilisateur.id, email: utilisateur.email },
      SECRET_KEY,
      { expiresIn: "1d" } // 1 jour
    );

    // Envoie du token dans la réponse
    return NextResponse.json({
      message: "Connexion réussie.",
      token,
      utilisateur: {
        id: utilisateur.id,
        email: utilisateur.email,
        nom: utilisateur.nom,
        role: utilisateur.role,
      },
    });

  } catch (erreur) {
    console.error("Erreur lors de la connexion:", erreur);
    return NextResponse.json(
      { erreur: "Une erreur technique est survenue. Veuillez réessayer plus tard." },
      { status: 500 }
    );
  }
}
