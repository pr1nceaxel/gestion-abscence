import { jwtVerify, SignJWT, type JWTPayload } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import prisma from './prisma';
import * as bcrypt from 'bcrypt';

// Clé secrète pour JWT
const secretKey = process.env.JWT_SECRET_KEY;
if (!secretKey) throw new Error('JWT_SECRET_KEY is not defined');
const key = new TextEncoder().encode(secretKey);

// Interface pour le payload JWT
interface UserPayload extends JWTPayload {
  id: string;
  email: string;
  nom: string;
  role: string;
  // Note: Ne pas inclure le mot de passe dans le JWT pour des raisons de sécurité
}

export async function encrypt(payload: UserPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(key);
}

export async function decrypt(input: string): Promise<UserPayload> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  });
  return payload as UserPayload;
}

export async function auth() {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) return null;

  try {
    const user = await decrypt(token);
    return { user };
  } catch (error) {
    console.error('Token invalide:', error);
    return null;
  }
}

export async function loginUser(email: string, password: string) {
  // 1. Vérifier l'utilisateur dans la base de données
  const user = await prisma.utilisateurs.findUnique({
    where: { email },
  });

  if (!user) return null;

  // 2. Vérifier le mot de passe
  const passwordMatch = await bcrypt.compare(password, user.mot_de_passe);
  if (!passwordMatch) return null;

  // 3. Créer le payload JWT (sans le mot de passe)
  const payload: UserPayload = {
    id: user.id.toString(),
    email: user.email,
    nom: user.nom,
    role: user.role,
    // Ne pas inclure le mot de passe!
  };

  // 4. Créer et retourner le token
  const token = await encrypt(payload);
  
  return {
    token,
    user: payload,
  };
}